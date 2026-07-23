# Backend en el servidor (2.25.136.176)

Piezas que viven en el server, no las sirve Astro. Acá versionadas.

## mailer/server.mjs
Servicio Node que recibe el POST del formulario de cotización, arma el
correo con el template de marca y lo envía vía Resend.

- Corre como systemd: `masdechile-mailer.service` (usuario www-data, :8790)
- Config en `/opt/masdechile-mailer/.env`:
  - `RESEND_API_KEY` — clave de Resend (obligatoria)
  - `MAIL_TO` — destino (seguimientomasdechile@gmail.com)
  - `MAIL_FROM` — remitente (onboarding@resend.dev hasta verificar dominio)
- nginx lo expone en `location = /api/cotizar`

### Actualizar
    scp server/mailer/server.mjs root@2.25.136.176:/opt/masdechile-mailer/
    ssh root@2.25.136.176 systemctl restart masdechile-mailer

### Setear la API key
    ssh root@2.25.136.176
    nano /opt/masdechile-mailer/.env   # RESEND_API_KEY=re_...
    systemctl restart masdechile-mailer

## masdechile.cl.nginx.conf
Config de nginx: www->apex, redirects de comuna/servicios viejos,
proxy /api/cotizar y servido estático. Va en
`/etc/nginx/sites-available/masdechile.cl`.
