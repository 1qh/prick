Just create your own `.env` file then run `bun ok` 😊

<details>
    <summary>note</summary>

> Start the postgreSQL server

```sh
./start-database.sh
bun db:push
```

> Seed the database

```sh
bun seed.ts
```

> Host a fake endpoint

```sh
cd fake-server
bun serve.ts
```

</details>
