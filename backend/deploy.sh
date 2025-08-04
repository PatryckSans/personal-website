#!/bin/bash

# Build TypeScript
npm run build

# Deploy com SAM
sam deploy \
  --parameter-overrides \
    FromEmail="patrycksans@gmail.com" \
    ToEmail="patrycksans@gmail.com" \
  --guided