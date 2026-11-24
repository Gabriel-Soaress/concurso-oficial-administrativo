import type { ZoomDiagramPayload } from "@/components/lesson/DiagramZoomModal";

export function serializeSvgToDataUrl(svgEl: SVGSVGElement): string {
  const clone = svgEl.cloneNode(true) as SVGSVGElement;
  if (!clone.getAttribute("xmlns")) {
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  }
  const vb = (clone.getAttribute("viewBox") || "0 0 760 470").trim().split(/[\s,]+/);
  if (vb.length === 4) {
    clone.setAttribute("width", vb[2]);
    clone.setAttribute("height", vb[3]);
  }
  clone.removeAttribute("style");
  const svgXml = new XMLSerializer().serializeToString(clone);
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgXml);
}

export function isZoomableSvg(svgEl: SVGSVGElement): boolean {
  const vbAttr = svgEl.getAttribute("viewBox") || "";
  const parts = vbAttr.trim().split(/[\s,]+/);
  if (parts.length === 4) {
    const w = parseFloat(parts[2]);
    const h = parseFloat(parts[3]);
    return Number.isFinite(w) && Number.isFinite(h) && w >= 180 && h >= 100;
  }
  const rect =
    typeof svgEl.getBoundingClientRect === "function"
      ? svgEl.getBoundingClientRect()
      : { width: 0, height: 0 };
  return rect.width >= 180 && rect.height >= 100;
}

export function extractZoomPayload(
  container: HTMLElement,
  fallbackTitle?: string
): ZoomDiagramPayload | null {
  const imgEl =
    container instanceof HTMLImageElement ? container : container.querySelector("img");
  if (imgEl && (imgEl.currentSrc || imgEl.src)) {
    return {
      title:
        container.dataset.zoomTitle ||
        imgEl.alt?.trim() ||
        fallbackTitle ||
        "🖼️ Imagem Ampliada",
      dataUrl: imgEl.currentSrc || imgEl.src,
    };
  }

  const svgEl =
    container instanceof SVGSVGElement
      ? container
      : container.querySelector<SVGSVGElement>("svg");
  if (svgEl && isZoomableSvg(svgEl)) {
    const parentCard = container.closest(".edu-card, .edu-component");
    const titleEl = parentCard?.querySelector(".card-title, .edu-comp-title");
    const title =
      container.dataset.zoomTitle ||
      titleEl?.textContent?.trim() ||
      svgEl.getAttribute("aria-label")?.trim() ||
      fallbackTitle ||
      "📊 Fluxograma / Diagrama";
    return {
      title,
      dataUrl: serializeSvgToDataUrl(svgEl),
    };
  }

  return null;
}
