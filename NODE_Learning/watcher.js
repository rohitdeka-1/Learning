import { watch, watchFile } from 'node:fs';
import path from 'path';

console.log('=== fs.watch Tutorial ===\n');

// 1. Basic fs.watch - Monitor a directory
console.log('1. Basic Directory Watching:');
const watcher = watch('./folder', (eventType, filename) => {
  console.log(`Event: ${eventType}, File: ${filename}`);
  
  if (eventType === 'rename') {
    // 'rename' covers both file creation and deletion
    if (filename) {
      console.log(`✅ File "${filename}" was created`);
    } else {
      console.log(`❌ A file was deleted`);
    }
  } else if (eventType === 'change') {
    console.log(`📝 File "${filename}" was modified`);
  }
});

// 2. fs.watch with options
console.log('\n2. Watching with Options:');
const watcherWithOptions = watch('./folder', { 
  recursive: true,  // Watch subdirectories too
  persistent: true  // Keep watching (default is true)
}, (eventType, filename) => {
  console.log(`[Recursive] Event: ${eventType}, File: ${filename}`);
});

// 3. Handle watcher events
console.log('\n3. Watcher Event Handling:');
watcher.on('error', (error) => {
  console.error('Watcher error:', error);
});

watcher.on('close', () => {
  console.log('Watcher closed');
});

// 4. fs.watchFile - Monitor a specific file
console.log('\n4. File-specific Watching:');
watchFile('./folder/test.txt', (curr, prev) => {
  console.log(`File stats changed:`);
  console.log(`  Current size: ${curr.size} bytes`);
  console.log(`  Previous size: ${prev.size} bytes`);
  console.log(`  Current modified time: ${curr.mtime}`);
  console.log(`  Previous modified time: ${prev.mtime}`);
});

// 5. Practical example - Monitor for new files and log them
console.log('\n5. Practical Example - File Logger:');
const fileLogger = watch('./folder', (eventType, filename) => {
  const timestamp = new Date().toISOString();
  
  if (eventType === 'rename' && filename) {
    console.log(`[${timestamp}] NEW FILE DETECTED: ${filename}`);
    
    // You could also check if it's actually a file (not a directory)
    // and perform additional operations like:
    // - Read the file content
    // - Process the file
    // - Move it to another location
    // - etc.
  }
});

// 6. Stop watching after some time (demonstration)
console.log('\n6. Auto-stop demonstration (will stop after 30 seconds):');
setTimeout(() => {
  console.log('Stopping all watchers...');
  watcher.close();
  watcherWithOptions.close();
  fileLogger.close();
  console.log('All watchers stopped.');
}, 30000);

console.log('\n=== Tutorial Started ===');
console.log('Try creating, modifying, or deleting files in the ./folder directory');
console.log('The watchers will detect and log all changes.');
console.log('This will run for 30 seconds then stop automatically.\n');