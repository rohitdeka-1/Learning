import chokidar from 'chokidar';
import path from 'path';
import fs from 'fs';

console.log('=== Chokidar Tutorial ===\n');

// 1. Basic Chokidar Setup
console.log('1. Basic File Watching:');
const basicWatcher = chokidar.watch('./folder')
  .on('add', filePath => {
    console.log(`✅ File added: ${filePath}`);
  })
  .on('change', filePath => {
    console.log(`📝 File changed: ${filePath}`);
  })
  .on('unlink', filePath => {
    console.log(`❌ File removed: ${filePath}`);
  });

// 2. Advanced Configuration
console.log('\n2. Advanced Configuration:');
const advancedWatcher = chokidar.watch('./folder', {
  // Ignore patterns
  ignored: [
    '**/node_modules/**',
    '**/.git/**',
    '**/*.tmp',
    /(^|[\/\\])\../, // ignore dotfiles
  ],
  // Watch options
  persistent: true,
  ignoreInitial: false, // Don't ignore initial scan
  awaitWriteFinish: {
    stabilityThreshold: 2000, // Wait 2 seconds after last change
    pollInterval: 100 // Check every 100ms
  },
  // Performance options
  usePolling: false, // Use native events when possible
  interval: 100, // Polling interval (if usePolling is true)
  binaryInterval: 300, // Polling interval for binary files
  // Advanced options
  depth: 99, // How deep to watch subdirectories
  disableGlobbing: false, // Enable glob patterns
  alwaysStat: false, // Don't always get file stats
  followSymlinks: true, // Follow symbolic links
  cwd: process.cwd(), // Current working directory
});

// 3. All Available Events
console.log('\n3. All Available Events:');
const eventWatcher = chokidar.watch('./folder')
  .on('add', filePath => {
    console.log(`📄 File added: ${filePath}`);
  })
  .on('addDir', dirPath => {
    console.log(`📁 Directory added: ${dirPath}`);
  })
  .on('change', filePath => {
    console.log(`✏️  File changed: ${filePath}`);
  })
  .on('unlink', filePath => {
    console.log(`🗑️  File removed: ${filePath}`);
  })
  .on('unlinkDir', dirPath => {
    console.log(`🗂️  Directory removed: ${dirPath}`);
  })
  .on('ready', () => {
    console.log('🎯 Initial scan complete. Ready for changes!');
  })
  .on('raw', (event, path, details) => {
    console.log('🔧 Raw event:', event, path, details);
  })
  .on('error', error => {
    console.error('❌ Watcher error:', error);
  });

// 4. Practical Examples
console.log('\n4. Practical Examples:');

// Example 1: File Processor
console.log('\n4a. File Processor:');
const fileProcessor = chokidar.watch('./folder/**/*.txt', {
  ignored: /(^|[\/\\])\../,
  persistent: true
})
.on('add', filePath => {
  console.log(`Processing new file: ${filePath}`);
  // Read and process the file
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`Content: ${content.substring(0, 50)}...`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
})
.on('change', filePath => {
  console.log(`File updated: ${filePath}`);
});

// Example 2: Build Trigger
console.log('\n4b. Build Trigger:');
const buildTrigger = chokidar.watch(['./folder/**/*.js', './folder/**/*.css'], {
  ignored: ['**/node_modules/**', '**/dist/**'],
  persistent: true
})
.on('all', (event, path) => {
  console.log(`🔨 Build triggered by ${event} on ${path}`);
  // Simulate build process
  console.log('Running build process...');
});

// Example 3: Log Monitor
console.log('\n4c. Log Monitor:');
const logMonitor = chokidar.watch('./folder/**/*.log', {
  persistent: true,
  awaitWriteFinish: {
    stabilityThreshold: 1000,
    pollInterval: 100
  }
})
.on('change', logPath => {
  console.log(`📊 Log file changed: ${logPath}`);
  // Read last few lines of the log
  try {
    const content = fs.readFileSync(logPath, 'utf8');
    const lines = content.split('\n');
    const lastLines = lines.slice(-3).join('\n');
    console.log(`Recent log entries:\n${lastLines}`);
  } catch (error) {
    console.error(`Error reading log: ${error.message}`);
  }
});

// 5. Watcher Management
console.log('\n5. Watcher Management:');

// Get all watched paths
setTimeout(() => {
  console.log('\nCurrently watched paths:');
  console.log(basicWatcher.getWatched());
}, 2000);

// Add new paths dynamically
setTimeout(() => {
  console.log('\nAdding new path to watch...');
  basicWatcher.add('./folder/new-subfolder');
}, 5000);

// Remove paths from watching
setTimeout(() => {
  console.log('\nRemoving path from watch...');
  basicWatcher.unwatch('./folder/new-subfolder');
}, 8000);

// 6. Performance Monitoring
console.log('\n6. Performance Monitoring:');
let eventCount = 0;
const performanceWatcher = chokidar.watch('./folder', {
  persistent: true,
  ignoreInitial: true
})
.on('all', (event, path) => {
  eventCount++;
  console.log(`Event #${eventCount}: ${event} - ${path}`);
  
  if (eventCount % 10 === 0) {
    console.log(`📈 Processed ${eventCount} events so far`);
  }
});

// 7. Error Handling and Recovery
console.log('\n7. Error Handling:');
const robustWatcher = chokidar.watch('./folder', {
  persistent: true,
  ignoreInitial: true
})
.on('error', error => {
  console.error('❌ Watcher error:', error);
  // Attempt to recover
  console.log('🔄 Attempting to restart watcher...');
  setTimeout(() => {
    robustWatcher.close();
    // Restart logic would go here
  }, 1000);
})
.on('ready', () => {
  console.log('✅ Watcher ready and stable');
});

// 8. Cleanup and Best Practices
console.log('\n8. Cleanup (will run after 30 seconds):');
setTimeout(() => {
  console.log('\n🧹 Cleaning up all watchers...');
  
  // Close all watchers properly
  basicWatcher.close();
  advancedWatcher.close();
  eventWatcher.close();
  fileProcessor.close();
  buildTrigger.close();
  logMonitor.close();
  performanceWatcher.close();
  robustWatcher.close();
  
  console.log('✅ All watchers closed properly');
  console.log('💡 Best practices:');
  console.log('   - Always close watchers when done');
  console.log('   - Use ignore patterns to avoid unnecessary events');
  console.log('   - Handle errors gracefully');
  console.log('   - Use awaitWriteFinish for file processing');
  console.log('   - Monitor performance with large file sets');
  
}, 30000);

console.log('\n=== Chokidar Tutorial Started ===');
console.log('Try creating, modifying, or deleting files in the ./folder directory');
console.log('Watch how Chokidar handles different types of events!');
console.log('This will run for 30 seconds then clean up automatically.\n');