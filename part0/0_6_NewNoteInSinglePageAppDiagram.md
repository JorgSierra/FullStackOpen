```mermaid
sequenceDiagram
    participant browser
    participant server
	
	Note right of browser: Browser appends the new note to list and re-renders notes.
	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
	Note left of server: Server saves the message.
    server-->>browser: 201 Created
    deactivate server
	
```
