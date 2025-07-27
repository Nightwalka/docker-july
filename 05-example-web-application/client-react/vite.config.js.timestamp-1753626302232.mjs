// vite.config.js
import { defineConfig } from "file:///home/ron/app-dev/docker/docker-july/05-example-web-application/client-react/node_modules/vite/dist/node/index.js";
import react from "file:///home/ron/app-dev/docker/docker-july/05-example-web-application/client-react/node_modules/@vitejs/plugin-react-swc/index.mjs";
import dns from "dns";
dns.setDefaultResultOrder("verbatim");
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/golang": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/golang/, ""),
        secure: false
      },
      "/api/node": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/node/, ""),
        secure: false
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yb24vYXBwLWRldi9kb2NrZXIvZG9ja2VyLWp1bHkvMDUtZXhhbXBsZS13ZWItYXBwbGljYXRpb24vY2xpZW50LXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9yb24vYXBwLWRldi9kb2NrZXIvZG9ja2VyLWp1bHkvMDUtZXhhbXBsZS13ZWItYXBwbGljYXRpb24vY2xpZW50LXJlYWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Jvbi9hcHAtZGV2L2RvY2tlci9kb2NrZXItanVseS8wNS1leGFtcGxlLXdlYi1hcHBsaWNhdGlvbi9jbGllbnQtcmVhY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xuaW1wb3J0IGRucyBmcm9tICdkbnMnO1xuXG5kbnMuc2V0RGVmYXVsdFJlc3VsdE9yZGVyKCd2ZXJiYXRpbScpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgJy9hcGkvZ29sYW5nJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjgwODAnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGlcXC9nb2xhbmcvLCAnJyksXG4gICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgJy9hcGkvbm9kZSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpXFwvbm9kZS8sICcnKSxcbiAgICAgICAgc2VjdXJlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzWixTQUFTLG9CQUFvQjtBQUNuYixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBRWhCLElBQUksc0JBQXNCLFVBQVU7QUFHcEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxrQkFBa0IsRUFBRTtBQUFBLFFBQ3BELFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxhQUFhO0FBQUEsUUFDWCxRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsZ0JBQWdCLEVBQUU7QUFBQSxRQUNsRCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
