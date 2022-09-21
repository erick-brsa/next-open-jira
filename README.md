# OpenJira App
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

## Instalar las dependencias
```bash
yarn install
```

## Ejecutar el proyecto
```bash
yarn dev
```


## LLenar la base de datos con información de prueba
Acceder a:
```
http://localhost:3000/api/seed
```
