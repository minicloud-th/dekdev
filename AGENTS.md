<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the storefront sample catalog in `src/lib/products.ts` and reuse it across landing, shop and product routes so product information stays consistent.
- Use `StoreProvider` for session-only cart previews and clearly label demo forms and products; no authentication or payment service is connected.
- Use the shared `SiteShell` on public shopping pages; the login route owns its dark full-page layout to preserve the distinct authentication design.
