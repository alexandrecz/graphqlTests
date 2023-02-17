# Sample of Query

```
Query Users {
  users {
    name
  }
}

```

# Sample of Mutation

```
mutation($name: String!) {
  createUser(name: $name) {
    name
    id
  }    
}

```

# Sample of Query with relation field

```
query Appointments {
  appointments {
    startsAt
    customer {
      name
    }
  }
}

````