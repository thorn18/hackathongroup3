package com.characterApi.service;

import java.util.List;

import com.characterApi.model.BattleCharacter;

public interface BattleCharService {

	//crud
	
	public List<BattleCharacter> findAll();
	
	public BattleCharacter findBattleCharacterById(int id);
	
	public void createBattleCharacter(BattleCharacter battleCharacter);
	
	public void deleteBattleCharacterById(int id);
	
	public void updateBattleCharacter(BattleCharacter battleCharacter);
	
}
