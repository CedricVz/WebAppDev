<?xml version="1.0" encoding="UTF-8" ?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html" doctype-public="XSLT-compat" omit-xml-declaration="yes" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <html>
    		<head>
				<title>Calculator</title>
			</head>
			<body>
			<h2>Absorption Factor Tables</h2>
<!-- Walls and ceilings tab -->
			<table border="1">
				<tr bgcolor="#9acd32">
						 <th>Walls and Ceilings</th>
						 <th>250Hz</th>
						 <th>500Hz</th>
						 <th>1KHz</th>
						 <th>2KHz</th>
				 </tr>
				 
			<xsl:for-each select="/table/section/subsection/values">
				<tr>
					<td><xsl:value-of select="../name"/></td>
					<td><xsl:value-of select="v1"/></td>
					<td><xsl:value-of select="v2"/></td>
					<td><xsl:value-of select="v3"/></td>
					<td><xsl:value-of select="v4"/></td>

				</tr>
			</xsl:for-each>
			</table>
				 
 </body>
 </html>
 </xsl:template>
	
</xsl:transform>