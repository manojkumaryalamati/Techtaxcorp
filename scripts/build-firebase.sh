#!/bin/bash
echo "=========================================="
echo "  Building TechTaxCorp for Firebase"
echo "=========================================="
echo ""

echo "Step 1: Building frontend with Vite..."
npx vite build --config vite.config.firebase.ts
if [ $? -ne 0 ]; then
  echo "ERROR: Vite build failed!"
  exit 1
fi

echo ""
echo "Step 2: Generating robots.txt..."
cat > client/dist/robots.txt << 'EOF'
User-agent: *
Allow: /
Sitemap: https://techtaxcorp.com/sitemap.xml

Disallow: /api/
EOF

echo "Step 3: Generating sitemap.xml..."
cat > client/dist/sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://techtaxcorp.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://techtaxcorp.com/services</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://techtaxcorp.com/services/websites</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://techtaxcorp.com/services/accounting</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://techtaxcorp.com/portfolio</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://techtaxcorp.com/about</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://techtaxcorp.com/blog</loc><changefreq>daily</changefreq><priority>0.8</priority></url>
  <url><loc>https://techtaxcorp.com/contact</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://techtaxcorp.com/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://techtaxcorp.com/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>
EOF

echo ""
echo "=========================================="
echo "  Build complete!"
echo "=========================================="
echo ""
echo "Verifying build output..."
echo ""

if [ -f "client/dist/index.html" ]; then
  echo "  index.html .... OK"
else
  echo "  index.html .... MISSING!"
fi

if ls client/dist/assets/*.css 1>/dev/null 2>&1; then
  echo "  CSS files ..... OK"
else
  echo "  CSS files ..... MISSING!"
fi

if ls client/dist/assets/*.js 1>/dev/null 2>&1; then
  echo "  JS files ...... OK"
else
  echo "  JS files ...... MISSING!"
fi

echo ""
echo "Now run: firebase deploy --only hosting"
