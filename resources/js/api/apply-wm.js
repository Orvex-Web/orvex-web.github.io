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
            watermark.innerText = clientModule.watermarkText || "Marca de agua";

            Object.assign(watermark.style, {
                position: "fixed",
                top: "12px",
                left: "12px",
                background: "rgba(0, 0, 0, 0.06)",
                color: "#222",
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "14px",
                fontFamily: "Segoe UI, sans-serif",
                fontWeight: "600",
                boxShadow: "0 0 4px rgba(0,0,0,0.1)",
                zIndex: "9999",
                opacity: "0.7",
                pointerEvents: "none",
                userSelect: "none",
                backdropFilter: "blur(1.5px)",
                transition: "opacity 0.4s ease-in-out"
            });

            document.body.appendChild(watermark);
        }
    } catch (error) {
        console.error("❌ Error al cargar marca de agua:", error);
    }
})();
