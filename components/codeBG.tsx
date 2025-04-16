"use client"
import { useState, useEffect } from "react" 
import { motion } from "framer-motion"




export default function CodeBackground() {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    const codeSnippets: string[] = [
      "async/await",
      "fetch('/api/data')",
      ".then(res => res.json())",
      "Object.entries(obj)",
      "Array.isArray(arr)",
      "typeof variable",
      "try { ... } catch (error) { ... }",
      "throw new Error('Something went wrong')",
      "console.log('Debug message')",
      "console.error('Error message')",
      "console.warn('Warning message')",
      "localStorage.setItem('key', 'value')",
      "localStorage.getItem('key')",
      "localStorage.removeItem('key')",
      "sessionStorage.setItem('key', 'value')",
      "JSON.stringify(obj)",
      "JSON.parse(jsonString)",
      "encodeURIComponent('string')",
      "decodeURIComponent('string')",
      "Math.random()",
      "Math.floor(number)",
      "Math.ceil(number)",
      "Math.round(number)",
      "Math.max(1, 2, 3)",
      "Math.min(1, 2, 3)",
      "const router = useRouter()",
      "router.push('/path')",
      "router.query",
      "useParams()",
      "useSearchParams()",
      "const form = new FormData()",
      "form.append('key', 'value')",
      "const headers = new Headers()",
      "headers.append('Content-Type', 'application/json')",
      "const options = { method: 'POST', headers: headers, body: JSON.stringify(data) }",
      "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])",
      "const ref = useRef(null)",
      "ref.current",
      "useContext(MyContext)",
      "useReducer(reducer, initialState)",
      "reducer(state, action)",
      "process.env.NODE_ENV",
      "process.env.NEXT_PUBLIC_API_KEY",
      "module.exports = { ... }",
      "require('module')",
      "import { ... } from 'module'",
      "export default Component",
      "import Component from 'module'",
      "const result = array.find(element => element > 10);",
      "const filteredArray = array.filter(element => element > 10);",
      "const mappedArray = array.map(element => element * 2);",
      "const reducedValue = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);",
      "array.forEach(element => console.log(element));",
      "array.sort((a, b) => a - b);",
      "array.slice(1, 3);",
      "array.shift()",
      "array.unshift('newItem')",
      "string.substring(1, 4)",
      "string.split(',')",
      "string.trim()",
      "string.toUpperCase()",
      "string.toLowerCase()",
      "string.replace('old', 'new')",
      "string.includes('substring')",
      "string.startsWith('prefix')",
      "string.endsWith('suffix')",
      "string.padStart(10, '0')",
      "string.padEnd(10, '0')",
      "string.repeat(3)",
      "string.concat('otherString')",
      "string.charAt(0)",
      "string.charCodeAt(0)",
      "string.indexOf('substring')",
      "string.lastIndexOf('substring')",
      "const templateString = `Hello, ${name}!`;",
      "const set = new Set([1, 2, 3])",
      "set.add(4)",
      "set.delete(2)",
      "set.has(3)",
      "const map = new Map([['key1', 'value1'], ['key2', 'value2']])",
      "map.set('key3', 'value3')",
      "map.get('key1')",
      "map.delete('key2')",
      "map.has('key3')",
      "const promise = new Promise((resolve, reject) => { ... })",
      "promise.then(result => { ... }).catch(error => { ... })",
      "Promise.all([promise1, promise2])",
      "Promise.resolve(value)",
      "Promise.reject(error)",
      "export async function getServerSideProps(context) { ... }",
      "export async function getStaticProps(context) { ... }",
      "export async function generateStaticParams() { ... }",
      "export async function getStaticPaths() { ... }",
      "export const metadata = { ... }",
      "export const dynamic = 'force-dynamic'",
      "export const revalidate = 60",
      "useRouter()",
      "usePathname()",
      "useParams()",
      "useLayoutEffect(()=> { ... }, [])",
      "useDeferredValue(value)",
      "useTransition()",
      "useId()",
      "useDebugValue(value)",
      "useOptimistic(initialState, updateFn)",
      "useClient()",
      "useServer()",
      "useFormState(updateFn, initialState)",
      "useFormStatus()",
      "useActionState(action, initialState)",
      "useAction()",
      "const signal = AbortSignal.abort()",
      "const controller = new AbortController()",
      "const signal = controller.signal",
      "controller.abort()",
      "const worker = new Worker('worker.js')",
      "fileReader.readAsText(file)",
      "const crypto = window.crypto",
      "const mutationObserver = new MutationObserver((mutations) => { ... })",
      "mutationObserver.observe(element, { attributes: true, childList: true, subtree: true })",
      "mutationObserver.disconnect()",
      "const resizeObserver = new ResizeObserver((entries) => { ... })",
      "resizeObserver.observe(element)",
      "resizeObserver.disconnect()",
      "const performance = window.performance",
      "performance.now()",
      "performance.mark('start')",
      "performance.measure('duration', 'start')",
      "performance.getEntriesByName('duration')",
      "const animationFrame = requestAnimationFrame(() => { ... })",
      "cancelAnimationFrame(animationFrame)",
      "const mediaQuery = window.matchMedia('(max-width: 768px)')",
      "mediaQuery.addEventListener('change', (event) => { ... })",
      "mediaQuery.removeEventListener('change', (event) => { ... })",
      "const broadcastChannel = new BroadcastChannel('channel')",
      "broadcastChannel.postMessage({ message: 'hello' })",
      "broadcastChannel.onmessage = (event) => { ... }",
      "broadcastChannel.close()",
      "const structuredClone = window.structuredClone(object)",
      "const webSocket = new WebSocket('ws://example.com')",
      "webSocket.onopen = () => { ... }",
      "webSocket.onmessage = (event) => { ... }",
      "webSocket.onerror = (error) => { ... }",
      "webSocket.onclose = () => { ... }",
      "webSocket.send('message')",
      "webSocket.close()",
      "const serviceWorkerRegistration = await navigator.serviceWorker.register('sw.js')",
      "serviceWorkerRegistration.update()",
      "serviceWorkerRegistration.unregister()",
      "navigator.serviceWorker.addEventListener('message', (event) => { ... })",
  ]
  
  
    // Generates a random percentage string, like '30%'
    const getRandomPercent = () => `${Math.floor(Math.random() * 100)}%`
    const getRandomDelay = () => Math.random() * 3
    
    // Group snippets into logical "files"
    const groupSnippets = (): string[][] => {
      const groups: string[][] = [];
      let currentGroup: string[] = [];
      let lineCount = 0;
      
      codeSnippets.forEach((snippet, index) => {
        currentGroup.push(snippet);
        lineCount++;
        
        // Create a new group every 3-7 lines to simulate code files
        if (lineCount >= 3 + Math.floor(Math.random() * 4) || index === codeSnippets.length - 1) {
          groups.push([...currentGroup]);
          currentGroup = [];
          lineCount = 0;
        }
      });
      
      return groups;
    }
    
    const codeGroups = groupSnippets();
    
    return (
      <div className="relative w-full h-full">
        {isMounted && codeGroups.map((group, groupIndex) => {
          const top = getRandomPercent();
          const left = getRandomPercent();
          const delay = getRandomDelay();
          
          return (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.7, 0.7, 0], 
                y: [20, 0, 0, -20] 
              }}
              transition={{
                duration: 8, // Reduced duration for a faster fade effect
                times: [0, 0.4, 0.4, 0.7],
                delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                top,
                left,
                position: 'absolute',
              }}
              className="rounded border border-gray-600 shadow-lg font-mono text-sm pointer-events-none overflow-hidden"
            >
              {/* Code Editor Header */}
              <div className="flex items-center bg-gray-700 px-2 py-1">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <div className="ml-4 text-white text-xs font-semibold">
                  Portfolio.js
                </div>
              </div>
              {/* Code Editor Content */}
              <div className="p-3 bg-gray-800 text-purple-300 text-left">
                {group.map((line, lineIndex) => (
                  <div key={lineIndex} className="whitespace-nowrap">
                    <span className="text-gray-500 mr-2">{lineIndex + 1}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
          
        })}
      </div>
    );
  }
