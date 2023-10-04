# DOJ Antitrust backend prototype

__This project is no longer active__

This prototype was developed by [18F](https://18f.gsa.gov/) on behalf of the [DOJ Antitrust Division](https://www.justice.gov/atr) (ATR) in 2023. It was used with usability testing conducted with members of the public.

This a non-production system and does not collect or store data.

[View the latest version of the prototype](https://federalist-7375f0a0-5451-4b0d-aae4-45ef17c1a18d.sites.pages.cloud.gov/site/18f/doj-atr-prototype/)

## Development

### Local development

Install node and npm.

1. From the repo directory, run:
   ```sh
   npm install
   npm start
   ```
1. Go to http://localhost:8080

### GitHub Codespaces

1. Create a new GitHub Codespace
1. Wait a moment while it detects the environment and installs dependencies
1. Run `npm start`
1. Click the button on the lower right to go to a new browser window to preview the site

### Run tests

```
npm test
npm run lint
```

## Preview

### Code

This repository is a static site generator, which means that it creates HTML from more simple documents. The HTML that made up the final iteration of the prototype has been bundled up as `_site.zip`. You can download and unzip `_site.zip` to try out the prototype locally.

### Cloud.gov Pages

Preview branches are built and hosted on [Cloud.gov Pages](https://cloud.gov/pages/). This is not a production site and there is no guarantee of the continued presence of the preview. The most recent preview of the main branch is available at [https://federalist-7375f0a0-5451-4b0d-aae4-45ef17c1a18d.sites.pages.cloud.gov/site/18f/doj-atr-prototype/](https://federalist-7375f0a0-5451-4b0d-aae4-45ef17c1a18d.sites.pages.cloud.gov/site/18f/doj-atr-prototype/).


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
