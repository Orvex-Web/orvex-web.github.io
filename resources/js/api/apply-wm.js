(async () => {
    const currentDomain = window.location.hostname;

    try {
        const config = await import("https://orvex-web.github.io/resources/js/api/config-wm.js");
        const client = config.clientScripts.find(c => c.domain === currentDomain);

        if (!client) {
            console.warn(`❌ Dominio no autorizado para marca de agua: ${currentDomain}`);
            return;
        }

        const clientModule = await import(client.script);

        if (clientModule.watermarkEnabled) {
            const watermark = document.createElement("div");
            watermark.innerText = clientModule.watermarkText || "Marca de Agua ORVEX™";
            Object.assign(watermark.style, {
                position: "fixed",
                bottom: "10px",
                right: "10px",
                opacity: "0.3",
                fontSize: "14px",
                color: "#000",
                zIndex: "9999",
                pointerEvents: "none",
                fontFamily: "sans-serif",
                transform: "rotate(-20deg)",
                fontWeight: "bold"
            });
            document.body.appendChild(watermark);
        }
    } catch (error) {
        console.error("❌ Error al cargar marca de agua:", error);
    }
})();
