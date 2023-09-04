/*
 * SPDX-FileCopyrightText: 2023 Kevin de Jong <monkaii@hotmail.com>
 * SPDX-License-Identifier: MIT
 */

import * as fs from "fs";
import * as marked from "marked";
import * as path from "path";

import { Markdown } from "../src";

describe("Render", () => {
  test("Render markdown", () => {
    const data = fs.readFileSync(path.join(__dirname, "fixtures", "full-usecase.md"), "utf-8");
    const expected = fs.readFileSync(path.join(__dirname, "fixtures", "full-usecase.md.markdown"), "utf-8");
    
    marked.use({ renderer: Markdown });
    expect(marked.parse(data)).toBe(expected);
  });
})