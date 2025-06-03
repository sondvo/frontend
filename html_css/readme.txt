Tutorials: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content

HTML special "elements"
	<head>, <title>, <body>, <header>, ... , <img>, <audio>, <embed>
Name of  element is case-insensitive
	<head> is the same as <HEAD> or <Head>

!! IMPORTANT !!!
Paired elements:
	<head></head>
	<body></body>
Self-closed elements: contain small contents (Void elements)
	<img> OR <img ..... />
	<br>
	<hr>
	<input>
	<meta>
	<link>

<img src="PATH TO IMAGE" alt="SHOW THIS IF IMG WENT WRONG">

## Your_first_website

paragraph <p>
bullet points <li>



STRUCTURE:

head
/head

body
	header
		h1
	/header

	main
		article (the most independent part, do not require other articles for understanding)
			section (should have relationship with other sections within article)
				p (just a paragraph)
				/p

				ul (list)
				/ul
			/section
		/article
	/main

	footer
	/footer
/body
