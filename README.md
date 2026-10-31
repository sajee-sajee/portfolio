# Sajeesh K — Interactive Developer Studio

A complete static portfolio with an actual Three.js 3D room, animated door, scroll-driven camera, modeled desk and PC, and an interactive portfolio desktop. Built with HTML, CSS, JavaScript, and Three.js 0.180.0. All required Three.js runtime files are included locally; no API key, paid service, bundler, or npm install is needed.

## Run locally

Install Python 3, open a terminal in this directory, and run:

    python3 -m http.server 8000 --directory dist

On Windows you may use `py -m http.server 8000 --directory dist`.
Open http://localhost:8000 in your browser. Use a local server instead of opening index.html directly, because JavaScript modules require HTTP.

## Files

- `dist/index.html`: document, entrance text and monitor workspace.
- `dist/style.css`: responsive layout, typography and interface styling.
- `dist/app.js`: project content, interaction logic, scene geometry and camera animation.
- `dist/vendor/`: included Three.js module files and MIT license.

## Customize

Edit the `projects` array at the top of `dist/app.js` to change project names, descriptions, technologies, highlights, and GitHub URLs. Edit the `view` function to change your overview, skills, and biography. Room geometry is in the procedural scene section; measurements use Three.js world units. Theme colors are CSS variables in `dist/style.css`. LinkedIn, GitHub, and contact email use the details supplied by Sajeesh. Email links open the visitor’s email app; this site does not send or store messages.

## Featured projects

Descriptions were checked against the repository READMEs and implementation files on 31 October 2026. These are descriptions of the code, not claims about production usage or benchmark results.

| Project | Repository | Scope |
| --- | --- | --- |
| CodeHub | [Code-Hub](https://github.com/sajee-sajee/Code-Hub) | React/TypeScript browser editor with copy, download, sharing, and simulated example output. It does not compile arbitrary code. |
| Collab Room | [collab-room](https://github.com/sajee-sajee/collab-room) | Shared Monaco editor, Socket.IO chat and synchronization, PostgreSQL room records, and Docker execution for JavaScript/Python. |
| CodeGrid | [code-grid](https://github.com/sajee-sajee/code-grid) | Coders Guild gamified DSA experience with story missions, XP, daily quests, duels, and an Express/MongoDB backend. |
| Counting Apples | [Counting-apples-using-image-processing](https://github.com/sajee-sajee/Counting-apples-using-image-processing) | Python/OpenCV image-processing prototype with HSV masks, morphology, contour filtering, annotated output, and weight-based yield estimates. |

## Interaction

Scroll or use Step inside to enter the room. Continue scrolling or choose Explore the computer to open the desktop. Navigate Overview, Projects, Skills, About me, and Contact. Project titles open details; View on GitHub opens the corresponding repository in a new tab. Escape or the close button returns to the room. Open portfolio skips the journey. Keyboard focus and touch are supported. Motion off reduces camera easing and pointer movement. System reduced-motion preference is respected. A text interface remains available if WebGL initialization fails.

## Deployment

Serve the contents of `dist` on any static web host. No backend is required. The published portfolio is at https://sajeesh-interactive-studio.sajeeshsarang087.chatgpt.site. Fonts load from Google Fonts when available and fall back to local sans-serif fonts otherwise.

## Checks

Application JavaScript syntax was validated with Node.js. Browser checks verified the four project cards, repository URLs, and project details in the portfolio desktop. The preview browser has WebGL disabled, so the original 3D scene could not be visually tested; its existing fallback successfully opened the portfolio.

## License

Your custom source is editable and reusable. Three.js is MIT licensed; retain `dist/vendor/THREE-LICENSE.txt` when distributing it.
