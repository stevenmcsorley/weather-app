#!/bin/bash
set -e

echo "Waiting for MongoDB to start..."
until mongo --host mongo --eval "print(\"waited for connection\")"
do
    sleep 2
done

echo "MongoDB started, initializing replica set..."

mongo --host mongo --eval "
rs.initiate({
 _id: \"rs0\",
 members: [
   { _id: 0, host: \"mongo:27017\" }
 ]
});
"

echo "MongoDB replica set initialized."
