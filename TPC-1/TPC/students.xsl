<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="text" omit-xml-declaration="yes" indent="yes"/>
    
    <xsl:template match="root">
        
        <xsl:for-each select="student">
            
            <xsl:text disable-output-escaping="yes"><![CDATA[<http://www.semanticweb.org/ze/ontologies/2020/TPC1#]]></xsl:text>
            <xsl:value-of select="number"/>
            <xsl:text disable-output-escaping="yes"><![CDATA[>rdf:type owl:NamedIndividual ;]]></xsl:text>
            
            <xsl:text>&#xa;</xsl:text>
            
            <xsl:for-each select="UCs/UC">
                
                <xsl:text disable-output-escaping="yes"><![CDATA[<http://www.semanticweb.org/ze/ontologies/2020/TPC1#frequenta> <http://www.semanticweb.org/ze/ontologies/2020/TPC1#]]></xsl:text>
                <xsl:value-of select="."/> 
                <xsl:text disable-output-escaping="yes"><![CDATA[> ;]]></xsl:text>
                
                <xsl:text>&#xa;</xsl:text>
            </xsl:for-each>
            
            <xsl:text disable-output-escaping="yes"><![CDATA[<http://www.semanticweb.org/ze/ontologies/2020/TPC1#course> "]]></xsl:text>
            <xsl:value-of select="course"/> 
            <xsl:text disable-output-escaping="yes"><![CDATA["^^xsd:string ;]]></xsl:text>
            
            <xsl:text>&#xa;</xsl:text>
            
            <xsl:text disable-output-escaping="yes"><![CDATA[<http://www.semanticweb.org/ze/ontologies/2020/TPC1#email> "]]></xsl:text>
            <xsl:value-of select="number"/>
            <xsl:text disable-output-escaping="yes"><![CDATA[@alunos.uminho.com"^^xsd:string ;]]></xsl:text>
            
            <xsl:text>&#xa;</xsl:text>
            
            <xsl:text disable-output-escaping="yes"><![CDATA[<http://www.semanticweb.org/ze/ontologies/2020/TPC1#number> "]]></xsl:text>
            <xsl:value-of select="number"/>
            <xsl:text disable-output-escaping="yes"><![CDATA["^^xsd:string ;]]></xsl:text>
            
            <xsl:text>&#xa;</xsl:text>
            
            <xsl:text disable-output-escaping="yes"><![CDATA[<http://www.semanticweb.org/ze/ontologies/2020/TPC1#name> "]]></xsl:text>
            <xsl:value-of select="name"/>
            <xsl:text disable-output-escaping="yes"><![CDATA["^^xsd:string .]]></xsl:text>
            
            <xsl:text>&#xa;</xsl:text>
        </xsl:for-each>
        
    </xsl:template>
    
</xsl:stylesheet>