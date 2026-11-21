# MCP Integration Report

## MCP configuration

Created `.vscode/mcp.json` with:

- Microsoft Learn MCP: `https://learn.microsoft.com/api/mcp`
- GitHub MCP: `https://api.githubcopilot.com/mcp/`

## External documentation findings

- `prefers-color-scheme` detects the user's light or dark preference and is suitable for selecting an initial theme.
- A manual theme choice should override the operating-system preference.
- Text needs a minimum contrast ratio of 4.5:1 under WCAG 2.1 AA.
- Microsoft contrast guidance distinguishes normal light/dark palettes from high-contrast themes.

## Project color review

Calculated contrast ratios:

| Pair | Ratio | WCAG AA text |
| --- | ---: | --- |
| Dark text on dark surface | 14.64:1 | Pass |
| Dark muted text on dark surface | 5.62:1 | Pass |
| Light text on light surface | 15.80:1 | Pass |
| Light muted text on light surface | 5.25:1 | Pass |

The existing palette has no key text-contrast issue and does not require an immediate change.

## GitHub Issue check

The repository currently has one open Issue:

| Number | Title | Labels | Summary |
| --- | --- | --- | --- |
| #1 | Exercise: GitHub Copilot 實戰工作坊:Agent Mode × MCP × Agentic Workflows | None | The workshop exercise and step progression |

## Sources

- [Microsoft accessibility overview](https://learn.microsoft.com/en-us/windows/apps/design/accessibility/accessibility-overview)
- [Microsoft contrast themes](https://learn.microsoft.com/en-us/windows/apps/design/accessibility/high-contrast-themes)
- [MDN prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
- [WCAG 2.1 contrast minimum](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
