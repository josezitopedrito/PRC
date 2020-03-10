<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <style>
                body{
                    background-color: aliceblue;
                }
                div{
                    border-top: solid black;
                    margin:15px;
                }    
                
            </style>
            <head>
                <meta charset="UTF-8"/>
                <title>
                    <xsl:value-of select="pr/meta/title"/>
                </title>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="pr">
        <div style="margin:1cm">
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    <xsl:template match="meta">
        <h1><xsl:value-of select="keyName"/></h1>
        <h2><xsl:value-of select="title"/></h2>      
        <h3>Begin Date</h3>
        <xsl:value-of select="bDate"/>
        <h3>End Date</h3>
        <xsl:value-of select="eDate"/>
        <br/>
        <table border="2">
            <tr>
                <th>Supervisor's Name</th>
                <td >
                    <xsl:value-of select="supervisor/name"/>
                </td>
            </tr>
            <tr>
                <th>Supervisor's Homepage</th>
                <td >
                    <a href="{supervisor/homepage}"><xsl:value-of select="supervisor/homepage"/></a>
                </td>
            </tr>
            <tr>
                <th>Supervisor's Email</th>
                <td >
                    <xsl:value-of select="supervisor/email"/>
                </td>
            </tr>
        </table>
    </xsl:template>
    
    <xsl:template match="workTeam">
        <div>        
            <h2>Work Team</h2>
            <xsl:apply-templates/>
        </div>
        
    </xsl:template>
    
    <xsl:template match="member">
        <p>Identifier: <xsl:value-of select="identifier"/></p>
        <p>Name: <xsl:value-of select="name"/></p>
        <img src="{photo/@path}" width="10%"/>
    </xsl:template>
    
    <xsl:template match="abstract">
        <div >
            <h2>Abstract</h2>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    <xsl:template match="p">
        <p><xsl:apply-templates/></p>
    </xsl:template>
    <xsl:template match="b">
        <b><xsl:apply-templates/></b>
    </xsl:template>
    <xsl:template match="i">
        <i><xsl:apply-templates/></i>
    </xsl:template>
    
    <xsl:template match="u">
        <xsl:apply-templates/>
    </xsl:template>
    <xsl:template match="xref">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="deliverables">
        <div >
            <h2>Deliverables</h2>
            <ul>
                <xsl:apply-templates/>
            </ul>
        </div>
    </xsl:template>
    <xsl:template match="deliverable">
        <li><a href="{@path}"><xsl:value-of select="."/></a></li>
    </xsl:template>
    
</xsl:stylesheet>