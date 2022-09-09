# Next.js OpenJira App
Para correr localmente se necesita la base de datos

```bash
docker-compose up -d
```

* El -d significa __detached__

MongoDB URL Local:
```bash
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombar el archivo __.env.template__ as __.env.local__

# Ejecutar el proyecto
```
yarn dev
```


## LLenar la base de datos con información de prueba
Addecer a:
```
http://localhost:3000/api/seed
```