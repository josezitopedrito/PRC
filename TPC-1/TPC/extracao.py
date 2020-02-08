import csv
import xml.etree.ElementTree as ET
import xml.dom.minidom

with open('PRI2019-Avaliacao.csv', encoding="utf8") as File:
    reader = csv.reader(File,delimiter=',')
    root = ET.Element("root")
    for row in reader:       
        if row[0] != 'Número':
            student = ET.SubElement(root,"student")
            ET.SubElement(student,"number").text = row[0]
            ET.SubElement(student,"name").text = row[1]
            ET.SubElement(student,"course").text = 'MIEI'
            UCs = ET.SubElement(student,"UCs")
            ET.SubElement(UCs,"UC").text = 'Gramáticas de Compreensão de Software'
            ET.SubElement(UCs,"UC").text = 'Processamento e Representação de Informação'
    
tree = ET.ElementTree(root)
tree.write("studentsPRI.xml", xml_declaration=True, encoding='utf-8')

with open('studentsPRI.xml') as xmldata:
    xml = xml.dom.minidom.parseString(xmldata.read())  # or xml.dom.minidom.parseString(xml_string)
    xml_pretty_str = xml.toprettyxml()
    myfile = open("studentsPRI.xml", "w")
    myfile.write(xml_pretty_str)