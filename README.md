# download-file-AWS-by-nextjs

Base download file AWS by nextjs

## setup folder

Create folder pages/api/download using code base
call func to download file computer :

```bash
const downloadImage = (url: string) => {
  if (url && url.length && url.trim() !== "") {
    // Create ahref and click to avoid having to edit css
    const link = document.createElement("a");
    link.href = `/api/download?media=${url}`;
    link.click();
  }
};
```
