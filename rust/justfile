# required cli tools: taplo-cli,cargo-edit
# Installation by cargo
# cargo install taplo-cli
# cargo install cargo-edit -f --no-default-features --features "set-version"

default:
	just --list --unsorted

toolchain:
	rustup -V
	rustc -V
	cargo -V
	cargo fmt --version
	cargo clippy -V

fmt:
	cargo fmt
	taplo fmt

check:
	cargo fmt --check
	taplo fmt --check
	cargo clippy --no-deps --all-features -- -D warnings
