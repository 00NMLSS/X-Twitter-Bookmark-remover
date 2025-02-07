async function deleteAllBookmarks() {
    let bookmarksDeleted = 0;
    let errorCount = 0;
    let maxRetries = 3;
    const deletionBatchSize = 5;
    const longerPauseDuration = 3000; // delay after 5 deletions
    const betweenDeletionDelay = 500; // delay between each deletion
  
    while (true) {
      const bookmarkElements = document.querySelectorAll('[data-testid="removeBookmark"]');
      if (!bookmarkElements || bookmarkElements.length === 0) {
        console.log("No more bookmarks found on the page. Likely finished.");
        break;
      }
  
      for (let i = 0; i < bookmarkElements.length; i++) {
        const bookmarkElement = bookmarkElements[i];
  
        let retries = 0;
        let success = false;
  
        while (retries < maxRetries && !success) {
          try {
            bookmarkElement.click();
            bookmarksDeleted++;
            console.log(`Bookmark ${bookmarksDeleted} deleted.`);
            success = true;
          } catch (error) {
            console.error(`Error deleting bookmark ${i + 1}:`, error);
            errorCount++;
            retries++;
            await new Promise(resolve => setTimeout(resolve, 500)); // Retry delay
          }
        }
  
        if (!success) {
          console.error(`Failed to delete bookmark ${i + 1} after ${maxRetries} retries.`);
          errorCount++;
        }
  
        await new Promise(resolve => setTimeout(resolve, betweenDeletionDelay)); // Delay between individual deletions
  
        if (bookmarksDeleted % deletionBatchSize === 0) {
          console.log(`Pausing for ${longerPauseDuration / 1000} seconds after deleting ${deletionBatchSize} bookmarks.`);
          await new Promise(resolve => setTimeout(resolve, longerPauseDuration));
        }
      }
  
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Delay after scrolling
    }
  
    console.log(`Finished. ${bookmarksDeleted} bookmarks deleted. ${errorCount} errors encountered.`);
  }
  
  deleteAllBookmarks();