make run:
	echo "Starting Development Server...\n" && pnpm i && pnpm run dev;

make build:
	echo "Building app ...\n" && pnpm run-script build;

make lint:
	echo "Starting lint process...\n" && pnpm run lint;

make all:
	echo "Compiling application ...\n" && pnpm i && pnpm run-script build &&