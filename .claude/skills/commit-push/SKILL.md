# commit-push — Commit y sube cambios

Hace commit automático de cambios y sube al repo con Co-Authored-By.

## Ejemplo

```bash
/commit-push "Descripción de cambios"
```

## Qué hace

1. `git add -A` — agrega todos los cambios
2. `git commit -m "..."` — commit con Co-Authored-By automático
3. `git push origin main` — sube al repo

## Notas

- Automático: no pide confirmación
- Co-Authored-By incluido por defecto
- Falla si hay conflictos (requiere arreglo manual)
- Ideal para cambios finales
