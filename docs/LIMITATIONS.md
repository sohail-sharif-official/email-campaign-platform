# Prototype boundaries

Batch selection enforces suppression and a maximum batch size. It is not a temporal rate limiter, provider sender or CSV parser. Imports may partially apply if a later input address is invalid. Production imports need validation-before-commit.
