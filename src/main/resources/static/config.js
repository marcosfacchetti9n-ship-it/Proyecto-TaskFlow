window.APP_CONFIG = {
    API_BASE: resolveApiBase()
};

function resolveApiBase() {
    const { protocol, hostname, port } = window.location;

    if (port === "5500" || port === "5501" || port === "5502") {
        return "http://localhost:8080/api";
    }

    if (hostname === "localhost" || hostname === "127.0.0.1") {
        return `${protocol}//${hostname}:8080/api`;
    }

    return "/api";
}
