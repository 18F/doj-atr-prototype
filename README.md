# DOJ Antitrust backend prototype

This prototype is being developed by [18F](https://18f.gsa.gov/) on behalf of the DOJ Antitrust Division (ATR).

This a non-production system. This means this site is only for testing and prototyping and may not be used to store actual data.

## Development

### Docker

1. Clone this repo
2. Run `docker compose up`
3. Open http://localhost:8080

### Not Docker

To run the site locally:

1. Clone this repo
2. Run `npm install`
3. From the repo directory, run:
   ```sh
   npm install
   npm start
   ```
4. Open http://localhost:8080

### Run tests

```
npm test
npm run lint
```

Pa11y tests coming soon.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in
[CONTRIBUTING](https://handbook.tts.gsa.gov/contributing/):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the
> [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
