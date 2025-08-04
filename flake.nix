{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
  };

  outputs = { self, nixpkgs }:
    let
      inherit (nixpkgs) lib;

      revSuffix = lib.optionalString (self ? shortRev || self ? dirtyShortRev)
        "-${self.shortRev or self.dirtyShortRev}";

      makePackages = (system: dev:
        let
          pkgs = import nixpkgs {
            inherit system;
          };
        in
        rec {
          default = pkgs.rustPlatform.buildRustPackage {
            pname = "nodejs-bundler";
            version = "0.0.0-semantic-release" + revSuffix;

            src = lib.sourceByRegex ./. [
              "^Cargo\.(lock|toml)$"
              "^codegen(/.*)?$"
              "^example(/.*)?$"
              "^lib(/.*)?$"
            ];

            cargoLock = {
              lockFile = ./Cargo.lock;
              allowBuiltinFetchGit = true;
            };

            nativeBuildInputs = (with pkgs; [
              nodejs
              pkg-config
              rustPlatform.bindgenHook
            ]) ++ (if dev then
              with pkgs; [
                clippy
                rust-analyzer
                (rustfmt.override { asNightly = true; })
              ] else [ ]);

            preBuild = ''
              ln -vsf ${example-npm-deps}/* example/
            '';
          };

          example-npm-deps = pkgs.importNpmLock.buildNodeModules {
            npmRoot = "${default.src}/example";
            nodejs = pkgs.nodejs;
          };
        }
      );
    in
    builtins.foldl' lib.recursiveUpdate { } (builtins.map
      (system: {
        devShells.${system} = makePackages system true;
        packages.${system} = makePackages system false;
      })
      lib.systems.flakeExposed);
}
