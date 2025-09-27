export const mockData = [
  {
    "customerId": "CUST001",
    "name": "Amit Sharma",
    "email": "amit.sharma@example.com",
    "phone": "+91-9876543210",
    "location": "Bangalore, India",
    "joinedDate": "2021-06-15",
    "lifetimeValue": 58000,
    "churnRisk": "High",
    "sentimentScore": -0.3,
    "segment": "High Value - At Risk",
    "purchases": [
      { "orderId": "ORD1001", "date": "2024-12-01", "amount": 12000, "items": ["Laptop Bag", "Wireless Mouse"] },
      { "orderId": "ORD1002", "date": "2025-01-15", "amount": 18000, "items": ["Smartphone"] },
      { "orderId": "ORD1003", "date": "2025-04-10", "amount": 28000, "items": ["Smart TV"] }
    ],
    "supportTickets": [
      { "ticketId": "TCK9001", "date": "2025-02-02", "issue": "Delayed delivery", "status": "Resolved" },
      { "ticketId": "TCK9002", "date": "2025-05-18", "issue": "Warranty claim", "status": "Open" }
    ],
    "interactions": [
      { "channel": "Email", "date": "2025-06-01", "action": "Opened summer sale campaign" },
      { "channel": "App", "date": "2025-08-12", "action": "Browsed electronics category" }
    ]
  },
  {
    "customerId": "CUST002",
    "name": "Priya Nair",
    "email": "priya.nair@example.com",
    "phone": "+91-9123456789",
    "location": "Kolkata, India",
    "joinedDate": "2022-03-20",
    "lifetimeValue": 32000,
    "churnRisk": "Low",
    "sentimentScore": 0.7,
    "segment": "Loyal - Engaged",
    "purchases": [
      { "orderId": "ORD2001", "date": "2024-11-05", "amount": 1500, "items": ["Books"] },
      { "orderId": "ORD2002", "date": "2025-02-25", "amount": 8000, "items": ["Fitness Tracker"] },
      { "orderId": "ORD2003", "date": "2025-06-20", "amount": 22500, "items": ["Laptop"] }
    ],
    "supportTickets": [
      { "ticketId": "TCK8001", "date": "2025-03-01", "issue": "Refund request", "status": "Resolved" }
    ],
    "interactions": [
      { "channel": "WhatsApp", "date": "2025-07-10", "action": "Replied to service reminder" },
      { "channel": "Email", "date": "2025-08-25", "action": "Clicked festive offer" }
    ]
  },
  {
    "customerId": "CUST003",
    "name": "Rahul Verma",
    "email": "rahul.verma@example.com",
    "phone": "+91-9001234567",
    "location": "Delhi, India",
    "joinedDate": "2020-09-10",
    "lifetimeValue": 45000,
    "churnRisk": "Medium",
    "sentimentScore": 0.1,
    "segment": "Moderate - Needs Engagement",
    "purchases": [
      { "orderId": "ORD3001", "date": "2024-10-05", "amount": 5000, "items": ["Headphones"] },
      { "orderId": "ORD3002", "date": "2025-01-22", "amount": 20000, "items": ["Tablet"] },
      { "orderId": "ORD3003", "date": "2025-03-15", "amount": 20000, "items": ["Refrigerator"] }
    ],
    "supportTickets": [],
    "interactions": [
      { "channel": "SMS", "date": "2025-04-01", "action": "Received delivery confirmation" },
      { "channel": "App", "date": "2025-08-01", "action": "Added items to cart but abandoned" }
    ]
  }
]