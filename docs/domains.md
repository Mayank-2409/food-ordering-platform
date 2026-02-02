# Domain Model

The system is divided into clear business domains.

---

## Core Domains

### Auth

- Login
- Signup
- Session management

### Users

- User profile
- Addresses
- Preferences

### Restaurants

- Restaurant listing
- Availability
- Menus

### Orders

- Cart
- Order creation
- Order status tracking

### Payments

- Payment initiation
- Payment confirmation

### Delivery (Future)

- Delivery assignment
- Order tracking

---

## Domain Rules

- Each domain owns its logic
- Domains should not directly depend on each other’s data
- Communication happens via services or events
