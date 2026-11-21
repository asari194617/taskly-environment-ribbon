(() => {
  const hosts = [
    "taskly.iy0306.com",
    "nnct-corp-guidance-2026.taskly.iy0306.com",
    "policies.taskly.iy0306.com",
    "auth.taskly.iy0306.com",
  ];
  const environments = new Map([
    ...hosts.map((host) => [`https://${host}`, { label: "本番環境", color: "#b91c1c" }]),
    ...hosts.map((host) => [`https://local.${host}`, { label: "開発環境", color: "#1d4ed8" }]),
  ]);
  const environment = environments.get(window.location.origin);
  if (!environment) return;

  const id = "taskly-environment-ribbon";
  if (document.getElementById(id)) return;

  const host = document.createElement("div");
  host.id = id;
  host.setAttribute("role", "note");
  host.setAttribute("aria-label", environment.label);

  const shadow = host.attachShadow({ mode: "closed" });
  const style = document.createElement("style");
  style.textContent = `
    :host {
      all: initial;
      position: fixed !important;
      top: 0 !important;
      right: 0 !important;
      width: 220px !important;
      height: 220px !important;
      z-index: 2147483647 !important;
      overflow: hidden !important;
      pointer-events: none !important;
    }

    .ribbon {
      position: absolute;
      top: 48px;
      right: -72px;
      box-sizing: border-box;
      width: 300px;
      padding: 9px 0;
      transform: rotate(45deg);
      background: ${environment.color};
      color: #fff;
      box-shadow: 0 2px 8px rgb(0 0 0 / 35%);
      font: 700 18px/1.4 system-ui, sans-serif;
      letter-spacing: .12em;
      text-align: center;
      white-space: nowrap;
    }
  `;

  const ribbon = document.createElement("div");
  ribbon.className = "ribbon";
  ribbon.textContent = environment.label;
  shadow.append(style, ribbon);
  document.documentElement.append(host);
})();
