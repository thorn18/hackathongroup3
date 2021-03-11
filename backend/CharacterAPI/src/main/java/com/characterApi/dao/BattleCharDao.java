package com.characterApi.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.characterApi.model.BattleCharacter;



@Repository
public interface BattleCharDao extends JpaRepository<BattleCharacter, Integer> {

	//crud
	
	public List<BattleCharacter> findAll();
	
	public BattleCharacter findBattleCharacterById(int id);
	
//	@Query(value="SELECT * FROM battle_character WHERE char_isHero=true")
//	public List<BattleCharacter> findAllByCharIsHero();
//	
//	@Query(value="SELECT * FROM battle_character WHERE char_isHero=false")
//	public List<BattleCharacter> findAllByCharIsVillain();
	
}
