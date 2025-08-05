#!/bin/bash

set -e

FROM_EMAIL="${FROM_EMAIL:-patrycksans@gmail.com}"
TO_EMAIL="${TO_EMAIL:-patrycksans@gmail.com}"

echo "Building TypeScript..."
npm run build

echo "Deploying with SAM..."
sam deploy \
  --parameter-overrides \
    FromEmail="$FROM_EMAIL" \
    ToEmail="$TO_EMAIL" \
  --guided