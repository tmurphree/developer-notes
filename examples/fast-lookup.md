# TypeScript
Use a Map

# PHP
Use an array where the key is the lookup.
```php
// placeholder for getting the customer IDs from somewhere
$suspiciousCustomers = [1,2,3,4];
$suspiciousCustomerLookupArray = array_fill_keys($suspiciousCustomers, 'unused value goes here, usually boolean true or null');

// later
if (isset($suspiciousCustomerLookupArray[$customerId])) {
    // do something
}
```
