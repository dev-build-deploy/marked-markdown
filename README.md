<!-- 
SPDX-FileCopyrightText: 2023 Kevin de Jong <monkaii@hotmail.com>
SPDX-License-Identifier: MIT
-->

# Marked Markdown - A Markdown renderer for Marked

A Markdown renderer for [marked](https://www.npmjs.com/package/marked).

## Usage

```typescript
import * as marked from "marked";
import { Asciidoc } from "@dev-build-deploy/marked-markdown";

marked.use({ renderer: Markdown })
marked.parse("# Hello world!");
```

## Contributing

If you have suggestions for how `marked-markdown` could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

- [MIT](./LICENSES/MIT.txt) © 2023 Kevin de Jong \<monkaii@hotmail.com\>
