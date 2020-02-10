<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="text"/>
    
    <xsl:template match="/">
        <xsl:apply-templates mode="e1"/>
    </xsl:template>
    
    <xsl:template match='obra' mode="e1">
        ###  http://www.semanticweb.org/ze/ontologies/2020/1/untitled-ontology-9#<xsl:value-of select="@id"/>
        :<xsl:value-of select="@id"/> rdf:type owl:NamedIndividual ;
        :arranjo "<xsl:value-of select="arranjo"/>"^^xsd:string ;
        :compositor "<xsl:value-of select="compositor"/>"^^xsd:string ;
        :tipo "<xsl:value-of select="tipo"/>"^^xsd:string ;
        :titulo "<xsl:value-of select="titulo"/>"^^xsd:string ;
        :video "<xsl:value-of select="inf-relacionada/video/@href"/>"^^xsd:string .
        <xsl:apply-templates select="instrumentos" mode="e2"/>
    </xsl:template>
    
    <xsl:template match="instrumento" mode="e2">
        ###  http://www.semanticweb.org/ze/ontologies/2020/1/untitled-ontology-9#<xsl:value-of select="translate(designacao, ' ','')"/><xsl:value-of select="partitura/@voz"/>
        :<xsl:value-of select="translate(designacao, ' ','')"/><xsl:value-of select="partitura/@voz"/> rdf:type owl:NamedIndividual ;
        :designacao "<xsl:value-of select="designacao"/>"^^xsd:string ;
        :partitura-path "<xsl:value-of select="partitura/@path"/>"^^xsd:string ;
        :partitura-type "<xsl:value-of select="partitura/@type"/>"^^xsd:string ;
        :partitura-voz "<xsl:value-of select="partitura/@voz"/>"^^xsd:string .
    </xsl:template>
    
</xsl:stylesheet>