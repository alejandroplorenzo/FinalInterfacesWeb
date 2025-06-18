import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div>
        <header class="header">
                <a href="/">Todos</a>
                <a href="/Favoritos">Favoritos</a>
        </header>
      <Component />
    </div>
  );
}