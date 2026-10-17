function escapeHTML(code) {
    return code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
}

//side btn
let moreButton = document.querySelector(".more-button");
let sideMenu = document.querySelector(".side-menu");
let closeButton = document.querySelector(".close-button");
let menuOverlay = document.querySelector(".menu-overlay");

moreButton.addEventListener("click", () => {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
});
closeButton.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});
menuOverlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});

//bubble sort 
const bubbleCppBtn = document.querySelector(".bubbleCpp");
const bubbleCBtn = document.querySelector(".bubbleC");
const bubbleJavaBtn = document.querySelector(".bubbleJava");
const bubblePythonBtn = document.querySelector(".bubblePython");

const bubbleCodeDisplay = document.querySelector(".bubbleSortCodeContent");

bubbleCppBtn.addEventListener("click", () => {

    bubbleCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCBtn.style.color = "white";
    bubbleCBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleJavaBtn.style.color = "white";
    bubbleJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubblePythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubblePythonBtn.style.color = "white";
    bubblePythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    bubbleCppBtn.style.backgroundColor = "rgb(180, 178, 178)";
    bubbleCppBtn.style.color = "rgb(23, 23, 23)";
    bubbleCppBtn.style.border = "3px solid white";

    const cppCode = `

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void bfs(vector<vector<int>>& adj, int start) {
    vector<bool> visited(adj.size(), false);
    queue<int> q;

    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int node = q.front();
        q.pop();

        cout << char('A' + node) << " ";

        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}

int main() {
    int n = 7;
    vector<vector<int>> adj(n);

    adj[0] = {1, 2};       // A -> B, C
    adj[1] = {0, 3, 4};    // B -> A, D, E
    adj[2] = {0, 4, 5};    // C -> A, E, F
    adj[3] = {1, 4};       // D -> B, E
    adj[4] = {1, 2, 3, 6}; // E -> B, C, D, G
    adj[5] = {2};          // F -> C
    adj[6] = {4};          // G -> E

    cout << "BFS Traversal: ";
    bfs(adj, 0);

    return 0;
}`;

    bubbleCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cppCode)}</code></pre>`;
});

bubbleCBtn.addEventListener("click", () => {

    bubbleCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCppBtn.style.color = "white";
    bubbleCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleJavaBtn.style.color = "white";
    bubbleJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubblePythonBtn.style.backgroundColor = "rgb(37, 36, 36))";
    bubblePythonBtn.style.color = "white";
    bubblePythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    bubbleCBtn.style.backgroundColor = "rgb(180, 178, 178)";
    bubbleCBtn.style.color = "rgb(23, 23, 23)";
    bubbleCBtn.style.border = "3px solid white";

    const cCode = `

#include <stdio.h>
#include <stdbool.h>

#define V 7

void bfs(int adj[V][V], int start) {
    bool visited[V] = {false};
    int queue[V];
    int front = 0, rear = 0;

    visited[start] = true;
    queue[rear++] = start;

    while (front < rear) {
        int node = queue[front++];

        printf("%c ", 'A' + node);

        for (int i = 0; i < V; i++) {
            if (adj[node][i] && !visited[i]) {
                visited[i] = true;
                queue[rear++] = i;
            }
        }
    }
}

int main() {
    int adj[V][V] = {0};

    adj[0][1] = adj[1][0] = 1;
    adj[0][2] = adj[2][0] = 1;
    adj[1][3] = adj[3][1] = 1;
    adj[1][4] = adj[4][1] = 1;
    adj[2][4] = adj[4][2] = 1;
    adj[2][5] = adj[5][2] = 1;
    adj[3][4] = adj[4][3] = 1;
    adj[4][6] = adj[6][4] = 1;

    printf("BFS Traversal: ");
    bfs(adj, 0);

    return 0;
}`;

    bubbleCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cCode)}</code></pre>`;
});

bubbleJavaBtn.addEventListener("click", () => {

    bubbleCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCppBtn.style.color = "white";
    bubbleCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCBtn.style.color = "white";
    bubbleCBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubblePythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubblePythonBtn.style.color = "white";
    bubblePythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    bubbleJavaBtn.style.backgroundColor = "rgb(180, 178, 178)";
    bubbleJavaBtn.style.color = "rgb(23, 23, 23)";
    bubbleJavaBtn.style.border = "3px solid white";

    const javaCode = `
import java.util.*;

public class Main {

    static void bfs(List<List<Integer>> adj, int start) {
        boolean[] visited = new boolean[adj.size()];
        Queue<Integer> queue = new LinkedList<>();

        visited[start] = true;
        queue.offer(start);

        while (!queue.isEmpty()) {
            int node = queue.poll();

            System.out.print((char) ('A' + node) + " ");

            for (int neighbor : adj.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }
    }

    public static void main(String[] args) {
        int n = 7;
        List<List<Integer>> adj = new ArrayList<>();

        for (int i = 0; i < n; i++)
            adj.add(new ArrayList<>());

        int[][] edges = {
            {0, 1}, {0, 2}, {1, 3}, {1, 4},
            {2, 4}, {2, 5}, {3, 4}, {4, 6}
        };

        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        }

        System.out.print("BFS Traversal: ");
        bfs(adj, 0);
    }
}`;

    bubbleCodeDisplay.innerHTML = `<pre><code>${escapeHTML(javaCode)}</code></pre>`;
});

bubblePythonBtn.addEventListener("click", () => {

    bubbleCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCppBtn.style.color = "white";
    bubbleCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleCBtn.style.color = "white";
    bubbleCBtn.style.border = "2px solid rgb(180, 178, 178)";

    bubbleJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    bubbleJavaBtn.style.color = "white";
    bubbleJavaBtn.style.border = "2px solid rgb(180, 178, 178)";



    bubblePythonBtn.style.backgroundColor = "rgb(180, 178, 178)";
    bubblePythonBtn.style.color = "rgb(23, 23, 23)";
    bubblePythonBtn.style.border = "3px solid white";

    const pythonCode = `
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)

    while queue:
        node = queue.popleft()
        print(node, end=" ")

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)


graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'E', 'F'],
    'D': ['B', 'E'],
    'E': ['B', 'C', 'D', 'G'],
    'F': ['C'],
    'G': ['E']
}

print("BFS Traversal:", end=" ")
bfs(graph, 'A')`;

    bubbleCodeDisplay.innerHTML = `<pre><code>${escapeHTML(pythonCode)}</code></pre>`;
});

//insertion sort 
const insertionCppBtn = document.querySelector(".insertionCpp");
const insertionCBtn = document.querySelector(".insertionC");
const insertionJavaBtn = document.querySelector(".insertionJava");
const insertionPythonBtn = document.querySelector(".insertionPython");

const insertionCodeDisplay = document.querySelector(".insertionSortCodeContent");

insertionCppBtn.addEventListener("click", () => {

    insertionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCBtn.style.color = "white";
    insertionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionJavaBtn.style.color = "white";
    insertionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionPythonBtn.style.color = "white";
    insertionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    insertionCppBtn.style.backgroundColor = "rgb(180, 178, 178)";
    insertionCppBtn.style.color = "rgb(23, 23, 23)";
    insertionCppBtn.style.border = "3px solid white";

    const cppCode = `
#include <iostream>
#include <vector>
using namespace std;

void dfs(vector<vector<int>>& adj, vector<bool>& visited, int node) {
    visited[node] = true;
    cout << char('A' + node) << " ";

    for (int neighbor : adj[node]) {
        if (!visited[neighbor]) {
            dfs(adj, visited, neighbor);
        }
    }
}

int main() {
    int n = 7;
    vector<vector<int>> adj(n);

    adj[0] = {1, 2};       // A -> B, C
    adj[1] = {0, 3, 4};    // B -> A, D, E
    adj[2] = {0, 4, 5};    // C -> A, E, F
    adj[3] = {1, 4};       // D -> B, E
    adj[4] = {1, 2, 3, 6}; // E -> B, C, D, G
    adj[5] = {2};          // F -> C
    adj[6] = {4};          // G -> E

    vector<bool> visited(n, false);

    cout << "DFS Traversal: ";
    dfs(adj, visited, 0);

    return 0;
}`;

    insertionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cppCode)}</code></pre>`;
});

insertionCBtn.addEventListener("click", () => {

    insertionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCppBtn.style.color = "white";
    insertionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionJavaBtn.style.color = "white";
    insertionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionPythonBtn.style.backgroundColor = "rgb(37, 36, 36))";
    insertionPythonBtn.style.color = "white";
    insertionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    insertionCBtn.style.backgroundColor = "rgb(180, 178, 178)";
    insertionCBtn.style.color = "rgb(23, 23, 23)";
    insertionCBtn.style.border = "3px solid white";

    const cCode = `
#include <stdio.h>
#include <stdbool.h>

#define V 7

void dfs(int adj[V][V], bool visited[V], int node) {
    visited[node] = true;
    printf("%c ", 'A' + node);

    for (int i = 0; i < V; i++) {
        if (adj[node][i] && !visited[i]) {
            dfs(adj, visited, i);
        }
    }
}

int main() {
    int adj[V][V] = {0};
    bool visited[V] = {false};

    adj[0][1] = adj[1][0] = 1;
    adj[0][2] = adj[2][0] = 1;
    adj[1][3] = adj[3][1] = 1;
    adj[1][4] = adj[4][1] = 1;
    adj[2][4] = adj[4][2] = 1;
    adj[2][5] = adj[5][2] = 1;
    adj[3][4] = adj[4][3] = 1;
    adj[4][6] = adj[6][4] = 1;

    printf("DFS Traversal: ");
    dfs(adj, visited, 0);

    return 0;
}`;

    insertionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cCode)}</code></pre>`;
});

insertionJavaBtn.addEventListener("click", () => {

    insertionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCppBtn.style.color = "white";
    insertionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCBtn.style.color = "white";
    insertionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionPythonBtn.style.color = "white";
    insertionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    insertionJavaBtn.style.backgroundColor = "rgb(180, 178, 178)";
    insertionJavaBtn.style.color = "rgb(23, 23, 23)";
    insertionJavaBtn.style.border = "3px solid white";

    const javaCode = `
import java.util.*;

public class Main {

    static void dfs(List<List<Integer>> adj,
                    boolean[] visited, int node) {
        visited[node] = true;
        System.out.print((char) ('A' + node) + " ");

        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                dfs(adj, visited, neighbor);
            }
        }
    }

    public static void main(String[] args) {
        int n = 7;
        List<List<Integer>> adj = new ArrayList<>();

        for (int i = 0; i < n; i++)
            adj.add(new ArrayList<>());

        int[][] edges = {
            {0, 1}, {0, 2}, {1, 3}, {1, 4},
            {2, 4}, {2, 5}, {3, 4}, {4, 6}
        };

        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        }

        boolean[] visited = new boolean[n];

        System.out.print("DFS Traversal: ");
        dfs(adj, visited, 0);
    }
}`;

    insertionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(javaCode)}</code></pre>`;
});

insertionPythonBtn.addEventListener("click", () => {

    insertionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCppBtn.style.color = "white";
    insertionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionCBtn.style.color = "white";
    insertionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    insertionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    insertionJavaBtn.style.color = "white";
    insertionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";



    insertionPythonBtn.style.backgroundColor = "rgb(180, 178, 178)";
    insertionPythonBtn.style.color = "rgb(23, 23, 23)";
    insertionPythonBtn.style.border = "3px solid white";

    const pythonCode = `
def dfs(graph, node, visited):
    visited.add(node)
    print(node, end=" ")

    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)


graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'E', 'F'],
    'D': ['B', 'E'],
    'E': ['B', 'C', 'D', 'G'],
    'F': ['C'],
    'G': ['E']
}

print("DFS Traversal:", end=" ")
dfs(graph, 'A', set())`;

    insertionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(pythonCode)}</code></pre>`;
});

//selection sort 
const selectionCppBtn = document.querySelector(".selectionCpp");
const selectionCBtn = document.querySelector(".selectionC");
const selectionJavaBtn = document.querySelector(".selectionJava");
const selectionPythonBtn = document.querySelector(".selectionPython");

const selectionCodeDisplay = document.querySelector(".selectionSortCodeContent");

selectionCppBtn.addEventListener("click", () => {

    selectionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCBtn.style.color = "white";
    selectionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionJavaBtn.style.color = "white";
    selectionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionPythonBtn.style.color = "white";
    selectionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    selectionCppBtn.style.backgroundColor = "rgb(180, 178, 178)";
    selectionCppBtn.style.color = "rgb(23, 23, 23)";
    selectionCppBtn.style.border = "3px solid white";

    const cppCode = `
#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

void dijkstra(vector<vector<pair<int, int>>>& adj, int start) {
    int n = adj.size();
    vector<int> dist(n, INT_MAX);

    priority_queue<pair<int, int>,
        vector<pair<int, int>>,
        greater<pair<int, int>>> pq;

    dist[start] = 0;
    pq.push({0, start});

    while (!pq.empty()) {
        int d = pq.top().first;
        int node = pq.top().second;
        pq.pop();

        if (d > dist[node])
            continue;

        for (auto edge : adj[node]) {
            int neighbor = edge.first;
            int weight = edge.second;

            if (dist[node] + weight < dist[neighbor]) {
                dist[neighbor] = dist[node] + weight;
                pq.push({dist[neighbor], neighbor});
            }
        }
    }

    cout << "Shortest distances from A:\n";
    for (int i = 0; i < n; i++)
        cout << char('A' + i) << ": " << dist[i] << "\n";
}

int main() {
    vector<vector<pair<int, int>>> adj(6);

    auto addEdge = [&](int u, int v, int w) {
        adj[u].push_back({v, w});
        adj[v].push_back({u, w});
    };

    addEdge(0, 1, 4);
    addEdge(0, 2, 2);
    addEdge(1, 3, 7);
    addEdge(1, 4, 8);
    addEdge(2, 4, 3);
    addEdge(2, 5, 5);
    addEdge(3, 4, 1);
    addEdge(4, 5, 6);

    dijkstra(adj, 0);

    return 0;
}`;

    selectionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cppCode)}</code></pre>`;
});

selectionCBtn.addEventListener("click", () => {

    selectionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCppBtn.style.color = "white";
    selectionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionJavaBtn.style.color = "white";
    selectionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionPythonBtn.style.backgroundColor = "rgb(37, 36, 36))";
    selectionPythonBtn.style.color = "white";
    selectionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    selectionCBtn.style.backgroundColor = "rgb(180, 178, 178)";
    selectionCBtn.style.color = "rgb(23, 23, 23)";
    selectionCBtn.style.border = "3px solid white";

    const cCode = `
#include <stdio.h>
#include <limits.h>
#include <stdbool.h>

#define V 6

void dijkstra(int graph[V][V], int start) {
    int dist[V];
    bool visited[V] = {false};

    for (int i = 0; i < V; i++)
        dist[i] = INT_MAX;

    dist[start] = 0;

    for (int count = 0; count < V; count++) {
        int minDist = INT_MAX;
        int u = -1;

        for (int i = 0; i < V; i++) {
            if (!visited[i] && dist[i] < minDist) {
                minDist = dist[i];
                u = i;
            }
        }

        if (u == -1)
            break;

        visited[u] = true;

        for (int v = 0; v < V; v++) {
            if (graph[u][v] > 0 && !visited[v] &&
                dist[u] != INT_MAX &&
                dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    printf("Shortest distances from A:\n");
    for (int i = 0; i < V; i++)
        printf("%c: %d\n", 'A' + i, dist[i]);
}

int main() {
    int graph[V][V] = {0};

    graph[0][1] = graph[1][0] = 4;
    graph[0][2] = graph[2][0] = 2;
    graph[1][3] = graph[3][1] = 7;
    graph[1][4] = graph[4][1] = 8;
    graph[2][4] = graph[4][2] = 3;
    graph[2][5] = graph[5][2] = 5;
    graph[3][4] = graph[4][3] = 1;
    graph[4][5] = graph[5][4] = 6;

    dijkstra(graph, 0);

    return 0;
}`;

    selectionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cCode)}</code></pre>`;
});

selectionJavaBtn.addEventListener("click", () => {

    selectionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCppBtn.style.color = "white";
    selectionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCBtn.style.color = "white";
    selectionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionPythonBtn.style.color = "white";
    selectionPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    selectionJavaBtn.style.backgroundColor = "rgb(180, 178, 178)";
    selectionJavaBtn.style.color = "rgb(23, 23, 23)";
    selectionJavaBtn.style.border = "3px solid white";

    const javaCode = `
import java.util.*;

public class Main {

    static void dijkstra(
            List<List<int[]>> adj, int start) {

        int n = adj.size();
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);

        PriorityQueue<int[]> pq = new PriorityQueue<>(
            Comparator.comparingInt(a -> a[0])
        );

        dist[start] = 0;
        pq.offer(new int[]{0, start});

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int d = current[0];
            int node = current[1];

            if (d > dist[node])
                continue;

            for (int[] edge : adj.get(node)) {
                int neighbor = edge[0];
                int weight = edge[1];

                if (dist[node] + weight < dist[neighbor]) {
                    dist[neighbor] = dist[node] + weight;
                    pq.offer(new int[]{dist[neighbor], neighbor});
                }
            }
        }

        System.out.println("Shortest distances from A:");
        for (int i = 0; i < n; i++)
            System.out.println((char)('A' + i)
                    + ": " + dist[i]);
    }

    static void addEdge(
            List<List<int[]>> adj, int u, int v, int w) {
        adj.get(u).add(new int[]{v, w});
        adj.get(v).add(new int[]{u, w});
    }

    public static void main(String[] args) {
        int n = 6;
        List<List<int[]>> adj = new ArrayList<>();

        for (int i = 0; i < n; i++)
            adj.add(new ArrayList<>());

        addEdge(adj, 0, 1, 4);
        addEdge(adj, 0, 2, 2);
        addEdge(adj, 1, 3, 7);
        addEdge(adj, 1, 4, 8);
        addEdge(adj, 2, 4, 3);
        addEdge(adj, 2, 5, 5);
        addEdge(adj, 3, 4, 1);
        addEdge(adj, 4, 5, 6);

        dijkstra(adj, 0);
    }
}`;

    selectionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(javaCode)}</code></pre>`;
});

selectionPythonBtn.addEventListener("click", () => {

    selectionCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCppBtn.style.color = "white";
    selectionCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionCBtn.style.color = "white";
    selectionCBtn.style.border = "2px solid rgb(180, 178, 178)";

    selectionJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    selectionJavaBtn.style.color = "white";
    selectionJavaBtn.style.border = "2px solid rgb(180, 178, 178)";



    selectionPythonBtn.style.backgroundColor = "rgb(180, 178, 178)";
    selectionPythonBtn.style.color = "rgb(23, 23, 23)";
    selectionPythonBtn.style.border = "3px solid white";

    const pythonCode = `
import heapq

def dijkstra(graph, start):
    dist = {node: float('inf') for node in graph}
    dist[start] = 0

    pq = [(0, start)]

    while pq:
        d, node = heapq.heappop(pq)

        if d > dist[node]:
            continue

        for neighbor, weight in graph[node]:
            new_dist = d + weight

            if new_dist < dist[neighbor]:
                dist[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))

    print("Shortest distances from A:")
    for node in graph:
        print(f"{node}: {dist[node]}")


graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('A', 4), ('D', 7), ('E', 8)],
    'C': [('A', 2), ('E', 3), ('F', 5)],
    'D': [('B', 7), ('E', 1)],
    'E': [('B', 8), ('C', 3), ('D', 1), ('F', 6)],
    'F': [('C', 5), ('E', 6)]
}

dijkstra(graph, 'A')`;

    selectionCodeDisplay.innerHTML = `<pre><code>${escapeHTML(pythonCode)}</code></pre>`;
});

//quick sort 
const quickCppBtn = document.querySelector(".quickCpp");
const quickCBtn = document.querySelector(".quickC");
const quickJavaBtn = document.querySelector(".quickJava");
const quickPythonBtn = document.querySelector(".quickPython");

const quickCodeDisplay = document.querySelector(".quickSortCodeContent");

quickCppBtn.addEventListener("click", () => {

    quickCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCBtn.style.color = "white";
    quickCBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickJavaBtn.style.color = "white";
    quickJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickPythonBtn.style.color = "white";
    quickPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    quickCppBtn.style.backgroundColor = "rgb(180, 178, 178)";
    quickCppBtn.style.color = "rgb(23, 23, 23)";
    quickCppBtn.style.border = "3px solid white";

    const cppCode = `
#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <climits>
using namespace std;

struct Node {
    int f, g, id;

    bool operator>(const Node& other) const {
        return f > other.f;
    }
};

void aStar(vector<vector<pair<int, int>>>& adj,
           vector<int>& h, int start, int goal) {
    int n = adj.size();
    vector<int> g(n, INT_MAX), parent(n, -1);
    priority_queue<Node, vector<Node>, greater<Node>> pq;

    g[start] = 0;
    pq.push({h[start], 0, start});

    while (!pq.empty()) {
        Node cur = pq.top();
        pq.pop();

        int u = cur.id;

        if (cur.g != g[u])
            continue;

        if (u == goal)
            break;

        for (auto edge : adj[u]) {
            int v = edge.first;
            int w = edge.second;
            int newG = g[u] + w;

            if (newG < g[v]) {
                g[v] = newG;
                parent[v] = u;
                pq.push({newG + h[v], newG, v});
            }
        }
    }

    if (g[goal] == INT_MAX) {
        cout << "No path found\n";
        return;
    }

    vector<int> path;
    for (int v = goal; v != -1; v = parent[v])
        path.push_back(v);

    reverse(path.begin(), path.end());

    cout << "Shortest path: ";
    for (int v : path)
        cout << char('A' + v) << " ";

    cout << "\nTotal cost: " << g[goal] << "\n";
}

int main() {
    vector<vector<pair<int, int>>> adj(6);

    auto addEdge = [&](int u, int v, int w) {
        adj[u].push_back({v, w});
        adj[v].push_back({u, w});
    };

    addEdge(0, 1, 4);
    addEdge(0, 2, 2);
    addEdge(1, 3, 7);
    addEdge(1, 4, 8);
    addEdge(2, 4, 3);
    addEdge(2, 5, 5);
    addEdge(3, 4, 1);
    addEdge(4, 5, 6);

    // Admissible heuristic estimates to goal F
    vector<int> h = {6, 5, 4, 3, 2, 0};

    aStar(adj, h, 0, 5);
    return 0;
}`;

    quickCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cppCode)}</code></pre>`;
});

quickCBtn.addEventListener("click", () => {

    quickCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCppBtn.style.color = "white";
    quickCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickJavaBtn.style.color = "white";
    quickJavaBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickPythonBtn.style.backgroundColor = "rgb(37, 36, 36))";
    quickPythonBtn.style.color = "white";
    quickPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    quickCBtn.style.backgroundColor = "rgb(180, 178, 178)";
    quickCBtn.style.color = "rgb(23, 23, 23)";
    quickCBtn.style.border = "3px solid white";

    const cCode = `
#include <stdio.h>
#include <limits.h>
#include <stdbool.h>

#define V 6

void aStar(int graph[V][V], int h[V],
           int start, int goal) {
    int g[V], parent[V];
    bool open[V] = {false};
    bool closed[V] = {false};

    for (int i = 0; i < V; i++) {
        g[i] = INT_MAX;
        parent[i] = -1;
    }

    g[start] = 0;
    open[start] = true;

    while (1) {
        int u = -1;
        int minF = INT_MAX;

        for (int i = 0; i < V; i++) {
            if (open[i] && g[i] != INT_MAX &&
                g[i] + h[i] < minF) {
                minF = g[i] + h[i];
                u = i;
            }
        }

        if (u == -1 || u == goal)
            break;

        open[u] = false;
        closed[u] = true;

        for (int v = 0; v < V; v++) {
            if (graph[u][v] <= 0)
                continue;

            int newG = g[u] + graph[u][v];

            if (newG < g[v]) {
                g[v] = newG;
                parent[v] = u;

                // Reopen if a better route is found
                closed[v] = false;
                open[v] = true;
            }
        }
    }

    if (g[goal] == INT_MAX) {
        printf("No path found\n");
        return;
    }

    int path[V], count = 0;

    for (int v = goal; v != -1; v = parent[v])
        path[count++] = v;

    printf("Shortest path: ");
    for (int i = count - 1; i >= 0; i--)
        printf("%c ", 'A' + path[i]);

    printf("\nTotal cost: %d\n", g[goal]);
}

int main() {
    int graph[V][V] = {0};
    int h[V] = {6, 5, 4, 3, 2, 0};

    graph[0][1] = graph[1][0] = 4;
    graph[0][2] = graph[2][0] = 2;
    graph[1][3] = graph[3][1] = 7;
    graph[1][4] = graph[4][1] = 8;
    graph[2][4] = graph[4][2] = 3;
    graph[2][5] = graph[5][2] = 5;
    graph[3][4] = graph[4][3] = 1;
    graph[4][5] = graph[5][4] = 6;

    aStar(graph, h, 0, 5);
    return 0;
}`;

    quickCodeDisplay.innerHTML = `<pre><code>${escapeHTML(cCode)}</code></pre>`;
});

quickJavaBtn.addEventListener("click", () => {

    quickCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCppBtn.style.color = "white";
    quickCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCBtn.style.color = "white";
    quickCBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickPythonBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickPythonBtn.style.color = "white";
    quickPythonBtn.style.border = "2px solid rgb(180, 178, 178)";



    quickJavaBtn.style.backgroundColor = "rgb(180, 178, 178)";
    quickJavaBtn.style.color = "rgb(23, 23, 23)";
    quickJavaBtn.style.border = "3px solid white";

    const javaCode = `
import java.util.*;

public class Main {

    static void aStar(List<List<int[]>> adj,
                      int[] h, int start, int goal) {
        int n = adj.size();
        int[] g = new int[n];
        int[] parent = new int[n];

        Arrays.fill(g, Integer.MAX_VALUE);
        Arrays.fill(parent, -1);

        PriorityQueue<int[]> pq = new PriorityQueue<>(
            Comparator.comparingInt(a -> a[0])
        );

        g[start] = 0;
        pq.offer(new int[]{h[start], 0, start});

        while (!pq.isEmpty()) {
            int[] cur = pq.poll();
            int currentG = cur[1];
            int u = cur[2];

            if (currentG != g[u])
                continue;

            if (u == goal)
                break;

            for (int[] edge : adj.get(u)) {
                int v = edge[0];
                int weight = edge[1];
                int newG = g[u] + weight;

                if (newG < g[v]) {
                    g[v] = newG;
                    parent[v] = u;
                    pq.offer(new int[]{newG + h[v], newG, v});
                }
            }
        }

        if (g[goal] == Integer.MAX_VALUE) {
            System.out.println("No path found");
            return;
        }

        List<Integer> path = new ArrayList<>();

        for (int v = goal; v != -1; v = parent[v])
            path.add(v);

        Collections.reverse(path);

        System.out.print("Shortest path: ");
        for (int v : path)
            System.out.print((char) ('A' + v) + " ");

        System.out.println("\nTotal cost: " + g[goal]);
    }

    static void addEdge(List<List<int[]>> adj,
                        int u, int v, int w) {
        adj.get(u).add(new int[]{v, w});
        adj.get(v).add(new int[]{u, w});
    }

    public static void main(String[] args) {
        int n = 6;
        List<List<int[]>> adj = new ArrayList<>();

        for (int i = 0; i < n; i++)
            adj.add(new ArrayList<>());

        addEdge(adj, 0, 1, 4);
        addEdge(adj, 0, 2, 2);
        addEdge(adj, 1, 3, 7);
        addEdge(adj, 1, 4, 8);
        addEdge(adj, 2, 4, 3);
        addEdge(adj, 2, 5, 5);
        addEdge(adj, 3, 4, 1);
        addEdge(adj, 4, 5, 6);

        int[] h = {6, 5, 4, 3, 2, 0};

        aStar(adj, h, 0, 5);
    }
}`;

    quickCodeDisplay.innerHTML = `<pre><code>${escapeHTML(javaCode)}</code></pre>`;
});

quickPythonBtn.addEventListener("click", () => {

    quickCppBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCppBtn.style.color = "white";
    quickCppBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickCBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickCBtn.style.color = "white";
    quickCBtn.style.border = "2px solid rgb(180, 178, 178)";

    quickJavaBtn.style.backgroundColor = "rgb(37, 36, 36)";
    quickJavaBtn.style.color = "white";
    quickJavaBtn.style.border = "2px solid rgb(180, 178, 178)";



    quickPythonBtn.style.backgroundColor = "rgb(180, 178, 178)";
    quickPythonBtn.style.color = "rgb(23, 23, 23)";
    quickPythonBtn.style.border = "3px solid white";

    const pythonCode = `
import heapq

def a_star(graph, heuristic, start, goal):
    g = {node: float('inf') for node in graph}
    parent = {node: None for node in graph}

    g[start] = 0
    pq = [(heuristic[start], 0, start)]

    while pq:
        f, current_g, node = heapq.heappop(pq)

        if current_g != g[node]:
            continue

        if node == goal:
            break

        for neighbor, weight in graph[node]:
            new_g = g[node] + weight

            if new_g < g[neighbor]:
                g[neighbor] = new_g
                parent[neighbor] = node

                new_f = new_g + heuristic[neighbor]
                heapq.heappush(
                    pq, (new_f, new_g, neighbor)
                )

    if g[goal] == float('inf'):
        print("No path found")
        return

    path = []
    node = goal

    while node is not None:
        path.append(node)
        node = parent[node]

    path.reverse()

    print("Shortest path:", " -> ".join(path))
    print("Total cost:", g[goal])


graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('A', 4), ('D', 7), ('E', 8)],
    'C': [('A', 2), ('E', 3), ('F', 5)],
    'D': [('B', 7), ('E', 1)],
    'E': [('B', 8), ('C', 3), ('D', 1), ('F', 6)],
    'F': [('C', 5), ('E', 6)]
}

# Estimated costs from each node to F
heuristic = {
    'A': 6,
    'B': 5,
    'C': 4,
    'D': 3,
    'E': 2,
    'F': 0
}

a_star(graph, heuristic, 'A', 'F')`;

    quickCodeDisplay.innerHTML = `<pre><code>${escapeHTML(pythonCode)}</code></pre>`;
});
