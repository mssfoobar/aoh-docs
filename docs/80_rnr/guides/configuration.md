---
sidebar_position: 2
---

# ⚙️ Configuration

## DB Snapshot Retention Configuration

`Replaymgr` service `DB_SNAPSHOT_RETENTION_IN_DAY` env variable set how long the data should be kept.

```dotenv
DB_SNAP_SHOT_RETENTION_IN_DAY=10
```

Default value will be set to 7 days if the env variable is not set.

## DebeziumStream Retention Configuration

1. Install [nats-cli](https://docs.nats.io/using-nats/nats-tools/nats_cli) tool
2. Create the DebeziumStream (skip to step 3 if the stream exists)

```bash
nats stream add DebeziumStream --storage=file -s nats://{host}:{port}
```

3. Edit the stream to write to file system & limit the retention period (for example: 7 days)


```bash
nats stream edit DebeziumStream --max-age=7d -s nats://{host}:{port}
```

## Minio Object Expiry Configuration

1. Install minio client tool [mc](https://min.io/docs/minio/linux/reference/minio-mc.html)
2. Set alias to the minio server (replace placeholder in {} with your environment setup)

```bash
mc alias set {name} {minio-server-url} {access-key} {secret-key}
```

3. Use the alias created in step 2 to set the bucket expiry by day

```bash
mc ilm rule add --expire-days 7 {name}/{bucketname}
```

## DB Snapshot Frequency Configuration

We use kubernetes cronjob to run bash script to take db snapshot.

To update the frequency of the db snapshot, update the kubernetes cronjob yaml file.

For example, update the schedule value in yaml file to `"*/5 * * *"` to set frequency to every 5 minutes.
```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: rnr-periodic-snapshot-raw
  namespace: common-rnr
spec:
  schedule: "*/5 * * * *"
```