# which-pll
Tell which PLL a given alg corresponds to.

## API

### `whichPll(<alg>)`

Returns the name of the PLL that `<alg>` is, as a string.
If `<alg>` is not a pll, returns `'?'`.

## Example

```
> whichPll("R2 U' R' U' R U R U R U' R")
'Ua'
> whichPll("R U R' F' R U R' U' R' F R2 U' R' U'")
'Jb'
> whichPll("")
''
> whichPll("F R U R' U' F'")
'?'
```
