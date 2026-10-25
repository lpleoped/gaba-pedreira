const raiz = document.documentElement;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let viajando = false;

for (const salto of document.querySelectorAll<HTMLAnchorElement>("[data-viaje]")) {
  const destino = salto.hash ? document.querySelector<HTMLElement>(salto.hash) : null;
  const foco = document.getElementById(salto.dataset.viaje ?? "") ?? destino;
  if (!destino || !foco) continue;

  const enfocar = () => {
    foco.focus({ preventScroll: true });
  };

  const terminar = (evento?: AnimationEvent) => {
    if (evento && evento.animationName !== "viaje-velo") return;
    if (!viajando) return;
    viajando = false;
    raiz.classList.remove("viaje");
    raiz.removeEventListener("animationend", terminar);
    enfocar();
  };

  salto.addEventListener("click", (evento) => {
    if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey || evento.button !== 0) return;

    if (reduce) {
      window.setTimeout(enfocar, 0);
      return;
    }

    evento.preventDefault();
    if (viajando) return;
    viajando = true;
    raiz.classList.add("viaje");
    raiz.addEventListener("animationend", terminar);

    window.setTimeout(() => {
      destino.scrollIntoView({ block: "start" });
      history.replaceState(null, "", salto.hash);
    }, 400);

    window.setTimeout(() => terminar(), 1300);
  });
}
