### Genearl Backend Routes
- localhost:8080/report

  - /delete: Deletes a document based on the ID passed by the frountend

  - /create: Creates a document based on JSON parameters passed by the frontend

  - /find: Returns a document based on the ID passed by the frontend, nothing will be returned if the document is not found

  - / loadpage: Loads 10 Documents at a time, if there are more than 10 documents, frontend will have to call the next page. The URI below shows how to fall the page, <b>the number after "page=" determins which page your are currently on</b>

    URI:
    ```
    http://localhost:8080/report/loadpage?page=1

- localhost:8080/route

Calls the main routing function on the backend to find the shortest path between two points, use the following URI to call the backend where <b>srcID is the starting point and destID is the ending point</b>:

```
http://localhost:8080/route?srcId=PAHB_1_E&dstId=FA_2_C