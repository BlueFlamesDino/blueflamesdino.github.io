# Programming Languages

## :two_hearts:Odin
[Odin](https://odin-lang.org) is a low-level programming language that is meant to fufill "The joy of programming". It has a "Batteries Included" mindset meaning many libraries are ready to use with just the download of the compiler. Its syntax is a modern day C. It compiles to binary.

Odin is my favorite language.

Language Hello World Example:
``` odin
package main
import "core:fmt"

main :: proc() {
    fmt.println("Hellope!")
}
```

## Javascript
[Javascript](https://en.wikipedia.org/wiki/JavaScript) is a high-level programming language that was created to run on browsers. It is interpreted via browsers.

Language Hello World Example:
``` js
console.log("Hello World!")
```

## Typescript
[Typescript](https://www.typescriptlang.org/) is a high-level programming language that was created to extend [Javascript](#javascript) with types. It compiles to [Javascript](#javascript).

Language Hello World Example:
``` ts
console.log("Hello World!")
```



# File formats

## JSON
[Javascript Object Notation](https://en.wikipedia.org/wiki/JSON)

Example:
``` json
{
    "name": "JSON",
    "number": 123,
    "anotherObjectinThisOne": {
        "name": "Object",
        "number": 321
    }
}
```

## Markdown
[Markdown](https://en.wikipedia.org/wiki/Markdown)

Example:
``` md
# Markdown
## An example of markdown

Fridays are so odd. I have a [blue](https://en.wikipedia.org/wiki/Blue) dalmation. Ip on my blob to frank reffing my thang jan don't moo kback.
```

::: details Output {closed}
### Markdown
#### An example of markdown

Fridays are so odd. I have a [blue](https://en.wikipedia.org/wiki/Blue) dalmation. Ip on my blob to frank reffing my thang jan don't moo kback.
:::

## TOML
[Tom's Obvious Minimal Language](https://toml.io/en/)

Example:
``` toml
name = "TOML"

[author]
name = "Tom Preston-Werner"

```