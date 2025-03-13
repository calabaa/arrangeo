# Utils Library

Offers utility functions and error handling mechanisms.

## Features

- **API Error Management**: `API_ERRORS`, defines common API errors for streamlined handling.
- **Promise Error Handling**: `to` function, simplifies error capturing in asynchronous operations.
- **Nullish Checks**: `isEmpty` function, checks if a value is nullish or empty.

## Usage

### API Errors

```typescript
import { API_ERRORS } from 'utils'
// Use API_ERRORS for error handling
console.error(API_ERRORS.INVALID_PARAMS.msg)
```

### Promise Error Handling

```typescript
import { to } from 'utils'
// Use the `to` function to handle Promise errors
const [err, data] = await to(fetch('https://api.example.com/data'))
if (err) console.error('Fetch error:', err)
```

### Nullish Checks

```typescript
import { isEmpty } from 'utils'
// Use `isEmpty` to check if a value is nullish or empty
console.log(isEmpty(null)) // true
console.log(isEmpty('')) // true
console.log(isEmpty([])) // true
console.log(isEmpty({})) // true
console.log(isEmpty('text')) // false
```
