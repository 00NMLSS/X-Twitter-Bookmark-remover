# Twitter Bookmark Deleter

This JavaScript script automates the process of deleting all your bookmarks on X (formerly Twitter).  Twitter no longer provides a way to delete all bookmarks at once, making this script a helpful alternative.

## Disclaimer

Use this script at your own risk. I am not responsible for any issues that may arise from using it. Be aware that using automated scripts to interact with websites can sometimes violate their terms of service. Test the script with a small number of bookmarks first.

## How to Use

1. **Open X (Twitter) in your browser** and navigate to your Bookmarks page.
2. **Open your browser's developer console.** (Usually by pressing F12).
3. **Copy and paste the entire script** into the console.
4. **Press Enter** to run the script.

## Script Details

The script iterates through your bookmarks, clicking the "Unbookmark" button for each one.  Because Twitter uses dynamic loading, the script scrolls down to load more bookmarks as it progresses.  It also includes delays to avoid rate limiting issues.

**Key Features:**

* **Dynamic Loading:** Handles Twitter's dynamic bookmark loading by scrolling.
* **Rate Limiting Mitigation:** Includes delays between deletions and longer pauses after batches of deletions to minimize the risk of hitting rate limits.
* **Configurable Delays:**  You can customize the delays between individual deletions and the longer pauses.

## Customization

You can adjust the following variables within the script:

* **`deletionBatchSize`:**  The number of bookmarks deleted before a longer pause.  Default is 5.
* **`longerPauseDuration`:** The duration of the longer pause in milliseconds. Default is 3000 (3 seconds).
* **`betweenDeletionDelay`:** The delay between individual bookmark deletions in milliseconds. Default is 500 (0.5 seconds).

To customize, simply change the values of these variables at the beginning of the script.  For example:

```javascript
const deletionBatchSize = 10;
const longerPauseDuration = 5000; // 5 seconds
const betweenDeletionDelay = 1000; // 1 second
```

Nuke your bookmarks. Elon Musk PLEASE bring back the button to remove every bookmark + hire me 
